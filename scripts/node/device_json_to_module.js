var cmd_args=process.argv.slice(2);
var service_dir = '../luup_services';
if (cmd_args.length > 0)
  service_dir = cmd_args[0];

const fs = require('fs');

const data = fs.readFileSync(0, 'utf8');
const json = JSON.parse(data);

process.stdout.write(`module.exports = {\n`);
process.stdout.write(`  deviceType: "${json.deviceType}",\n`);
process.stdout.write(`  upnpType: "${json.upnpType}",\n`);
process.stdout.write(`  services: {\n`);
if (json.services && json.services.length) {
  process.stdout.write('    ');
  svc_lines = json.services.map(svc =>
    `"${svc.serviceId}": {\n      api: require(\'${service_dir}/${svc.prototype}\')\n    }`,
  ).join(',\n    ');
  process.stdout.write(svc_lines);
  process.stdout.write(`\n`);
}
process.stdout.write(`  }\n`);


process.stdout.write(`};\n`);

