const fs = require('fs');

processStateVars = function(json, indent) {
  let section = null;
  if (json.stateVariables && json.stateVariables instanceof Object) {
    section = `${indent}variables: {\n`;
    let attrIndent = `${indent}    `;
    let variables = [];
    for(let name of Object.keys(json.stateVariables)) {
      let varDef = json.stateVariables[name];
      let attrs = [];

      if (varDef.hasOwnProperty("optional")) attrs.push(`optional: ${varDef.optional}`);
      if (varDef.hasOwnProperty("dataType")) attrs.push(`dataType: "${varDef.dataType}"`);

      // default value
      if (varDef.hasOwnProperty("defVal")) {
        if ('string' === varDef.dataType)
          attrs.push(`defVal: "${varDef.defVal}"`);
        else
          attrs.push(`defVal: ${varDef.defVal}`);
      }

      if (varDef.hasOwnProperty("min")) attrs.push(`min: ${varDef.min}`);
      if (varDef.hasOwnProperty("max")) attrs.push(`max: ${varDef.max}`);
      if (varDef.hasOwnProperty("enumeration")) {
        let e = [];
        e.push(`values: [`);
        e.push(varDef.enumeration.map(val => `${indent}"${val}"`).join(`,\n${attrIndent}`));
        e.push(`]`);
        attrs.push(e.join(`\n${attrIndent}`));
      }
      if (varDef.hasOwnProperty("shortCode")) attrs.push(`shortCode: "${varDef.shortCode}"`);
      if (varDef.hasOwnProperty("eventable")) attrs.push(`eventable: ${varDef.eventable}`);

      let varString = `    ${name}: {\n`;
      if (attrs.length) {
        varString += `${attrIndent}`;
        varString += attrs.join(`,\n${attrIndent}`);
        varString += `\n`;
      }
      varString +=`    }`;
      variables.push(varString);
    }
    section += variables.join(`,\n`);
    section += `\n${indent}}`;
  }

  return section;
}

processArgs = function(argGroups, groupName, actionDef) {
  if (actionDef.args.hasOwnProperty(groupName)) {
    let groupString = `      ${groupName}: {\n`;
    let groupArgs = [];
    for (let argName in actionDef.args[groupName]) {
      let argDef = actionDef.args[groupName][argName]
      if (argDef.var)
        groupArgs.push(`        ${argName}: "${argDef.var}"`);
      else
        groupArgs.push(`        ${argName}: null`);

    }
    groupString    += groupArgs.join(`,\n`);
    groupString    += `\n      }`;
    argGroups.push(groupString);
  }
}

processActions = function(json, indent) {
  let section = null;
  if (json.actions && json.actions instanceof Object) {
    section = `${indent}actions: {\n`;
    let actions = [];
    for(let name of Object.keys(json.actions)) {
      let actionDef = json.actions[name];
      let actString = `${indent}  ${name}: {`;
      if (actionDef.hasOwnProperty('args')) {
        let directions = [];
        processArgs(directions, 'in', actionDef);
        processArgs(directions, 'out', actionDef);
        let argString = directions.join(`,\n${indent}      `);
        if (argString.length) actString += ('\n' + argString + `\n${indent}  `);
      }
      actString += `}`;
      actions.push(actString);
    }
    section += actions.join(`,\n`);
    section += `\n${indent}}\n`;
  }
  return section;
}

const data = fs.readFileSync(0, 'utf8');
const json = JSON.parse(data);

process.stdout.write(`module.exports = {\n`);
process.stdout.write(`  serviceType: "${json.serviceType}",\n`);

let sections = [];
sections.push(processStateVars(json, '  '));
sections.push(processActions(json, '  '));

process.stdout.write(sections.filter(s => s !== null).join(',\n'));
process.stdout.write(`};\n`);
process.stdout.write(`\n`);

