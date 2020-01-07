const bool = require('./luup_conversions/bool'),
  passThru = require('./luup_conversions/pass_thru');

var Formats;

module.exports = class VeraConversions {
  constructor(platform) {
    this.log = platform.log;
    this.homebridge = platform.homebridge;
    Formats = this.homebridge.hap.Characteristic.Formats;
  }

  // TODO: address issues regarding veraType 'dateTime'
  // TODO: Currently most data types do not undergo a conversion.
  between(hkFormat, veraType) {
    switch(hkFormat) {
      // case 'boolean':
      case Formats.BOOL:
        return bool;

      // case 'i1':
      // case 'i4':
      // case 'int':
      case Formats.INT:
      // case 'number':
      case Formats.FLOAT:
      // case 'string':
      case Formats.STRING:
      // case 'ui1':
      case Formats.UINT8:
      // case 'ui2':
      case Formats.UINT16:
      // case 'ui4':
      case Formats.UINT32:
      default:
        // Default conversion is -no- conversion.
        return undefined;
    }
  }
};
