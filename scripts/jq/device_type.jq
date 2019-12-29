# transforms json equivalent of a vera device file 'D_Blah.xml' to device_type file with no exposed services
# the input is produced by xml2js -a -ns

include "snakecase";

def ptype(s): s|split(".")[0:-1]|join(".") | sub("\\b(D|S)[_]";"") | snakecase(.);
def insure_array(node): node | if type == "array" then . else [.] end;
def insure_services(node): node | if type == "object" and has("service") then .service else [] end;

.root.device | {
  deviceType: $device_type,
  services:
    .serviceList
    | insure_services(.)
    | insure_array(.)
    | [.[]
    | { serviceId: .serviceId, prototype: ptype(.SCPDURL) } ],
  upnpType: .deviceType
}
