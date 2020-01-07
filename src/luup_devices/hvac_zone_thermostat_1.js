module.exports = {
  deviceType: "hvac_zone_thermostat_1",
  upnpType: "urn:schemas-upnp-org:device:HVAC_ZoneThermostat:1",
  services: {
    "urn:upnp-org:serviceId:HVAC_FanOperatingMode1": {
      api: require('../luup_services/hvac_fan_operating_mode_1')
    },
    "urn:micasaverde-com:serviceId:HVAC_OperatingState1": {
      api: require('../luup_services/hvac_operating_state_1')
    },
    "urn:upnp-org:serviceId:HVAC_UserOperatingMode1": {
      api: require('../luup_services/hvac_user_operating_mode_1')
    },
    "urn:upnp-org:serviceId:FanSpeed1": {
      api: require('../luup_services/fan_speed_1')
    },
    "urn:upnp-org:serviceId:TemperatureSensor1": {
      api: require('../luup_services/temperature_sensor_1')
    },
    "urn:upnp-org:serviceId:TemperatureSetpoint1": {
      api: require('../luup_services/temperature_setpoint_1')
    },
    "urn:upnp-org:serviceId:TemperatureSetpoint1_Heat": {
      api: require('../luup_services/temperature_setpoint_1')
    },
    "urn:upnp-org:serviceId:TemperatureSetpoint1_Cool": {
      api: require('../luup_services/temperature_setpoint_1')
    },
    "urn:upnp-org:serviceId:SwitchPower1": {
      api: require('../luup_services/switch_power_1')
    },
    "urn:micasaverde-com:serviceId:EnergyMetering1": {
      api: require('../luup_services/energy_metering_1')
    },
    "urn:micasaverde-com:serviceId:HaDevice1": {
      api: require('../luup_services/ha_device_1')
    }
  }
};
