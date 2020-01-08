const {
    packageFile
} = require("./Constants"),
    _ = require("lodash"),
    fs = require("fs"),
    childProcess = require("child_process"),
    compareVersions = require("compare-versions"),
    os = require("os");

var Characteristic;

module.exports = class MyUtils {
    constructor(platform) {
        this.platform = platform;
        this.client = platform.client;
        this.log = platform.log;
        this.homebridge = platform.homebridge;
        Characteristic = platform.Characteristic;
    }

    getIPAddress() {
        let interfaces = os.networkInterfaces();
        for (let devName in interfaces) {
            let iface = interfaces[devName];
            for (let i = 0; i < iface.length; i++) {
                let alias = iface[i];
                if (
                    alias.family === "IPv4" &&
                    alias.address !== "127.0.0.1" &&
                    !alias.internal
                ) {
                    return alias.address;
                }
            }
        }
        return "0.0.0.0";
    }

    updateConfig(newConfig) {
        const configPath = this.homebridge.user.configPath();
        const file = fs.readFileSync(configPath);
        const config = JSON.parse(file);
        const platConfig = config.platforms.find(x => x.name === this.config.name);
        _.extend(platConfig, newConfig);
        const serializedConfig = JSON.stringify(config, null, "  ");
        fs.writeFileSync(configPath, serializedConfig, "utf8");
        _.extend(this.config, newConfig);
    }

    checkVersion() {
        this.log.info("Checking Package Version for Updates...");
        return new Promise((resolve) => {
            childProcess.exec(
                `npm view ${packageFile.name} version`,
                (error, stdout) => {
                    const newVer = stdout && stdout.trim();
                    if (newVer && compareVersions(stdout.trim(), packageFile.version) > 0) {
                        this.log.warn(`---------------------------------------------------------------`);
                        this.log.warn(`NOTICE: New version of ${packageFile.name} available: ${newVer}`);
                        this.log.warn(`---------------------------------------------------------------`);
                        resolve(true);
                    } else {
                        this.log.info(`INFO: Your plugin version is up-to-date`);
                        resolve(false);
                    }
                }
            );
        });
    }
};