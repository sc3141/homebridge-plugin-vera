const {
    pluginName,
    platformName
} = require("./libs/Constants"),
    VPlatform = require("./VeraPlatform");

module.exports = (homebridge) => {
    homebridge.registerPlatform(pluginName, platformName, VPlatform, true);
};