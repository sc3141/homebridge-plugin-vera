# jq script transforms json equivalent of vera service file 'S_Blah.xml' to service_type file with no exposed services
# the input is produced by xml2js -a -ns

def comment_out(node): [{ "/*": ""}] + node + [{"*/": ""}];
def insure_array(node): node | if type == "array" then . else [.] end;
def convert_eventable(node): node | if . == "yes" then true else false end;

.scpd | {
  serviceType: $service_type,
  variables:
    .serviceStateTable
    # guarantee value returned for 'stateVariable'
    | (. | if type == "object" and has("stateVariable") then insure_array(.stateVariable) else [] end)
    | map(
        .name as $name |
        {
          # variable
          ($name): (
            to_entries
            | map (
              if .key == "Optional" then
                { optional: true }
              elif [(.key)] | inside([ "dataType", "shortCode"]) then
                { (.key): .value }
              elif .key == "defaultValue" then
                { defVal: .value }
              elif .key == "sendEventsAttribute" then
                { eventable: convert_eventable(.value) }
              elif .key == "allowedValueRange" then
                (if .value.minimum? then { min: .value.minimum } else empty end),
                (if .value.maximum? then { max: .value.maximum } else empty end)
              elif .key == "allowedValueList" then
                (if .value.allowedValue? then { enumeration: insure_array(.value.allowedValue) } else empty end)
              else
                empty
              end
            )
            | add
          )
        }
    )
    | comment_out(.)
    | add,
  actions:
    .actionList
    # guarantee value returned for 'action'
    | (. | if type == "object" and has("action") then insure_array(.action) else [] end)
    | map(
        (.name | tostring) as $name |
        {
          # action
          ($name): (
            to_entries
            | map (
               if .key == "Optional" then
                 { optional: true }
               elif .key == "argumentList" then
                 if ([(.value? | type)] | inside([ "object", "array"]))
                   and ([(.value.argument? | type)] | inside([ "object", "array"])) then
                   # arguments
                   insure_array(.value.argument)
                   | { args: (
                       # input args
                       (select(.[].direction=="in")
                       | { in: (
                           map(
                             . as $arg
                             | {
                               ($arg.name):  { var: $arg.relatedStateVariable? }
                             }
                           )
                           | add
                         )
                       }),
                       # output args
                       (select(.[].direction=="out")
                       | { out: (
                           map(
                             . as $arg
                             | {
                               ($arg.name):  { var: $arg.relatedStateVariable? }
                             }
                           )
                           | add
                         )
                       })
                     )
                   }
                 else
                   empty
                 end
               else
                 {}
               end
            )
            | add
          )
        }
    )
    | comment_out(.)
    | add
}
