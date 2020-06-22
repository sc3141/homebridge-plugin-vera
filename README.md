# homebridge-plugin-vera

Server side [Homebridge](https://github.com/homebridge/homebridge) plugin. This plugin allows 'foreign' automation controllers to be accessed in [HomeKit](https://developer.apple.com/homekit/) [applications](https://www.apple.com/ios/home/) 
via [Homebridge](https://github.com/homebridge/homebridge).  [Homebridge](https://github.com/homebridge/homebridge) is built upon [HAP-nodejs](https://github.com/homebridge/HAP-NodeJS), and as such, is a server-side node application.

This will be primarily based off of the excellent @tonesto7 homebridge-smartthings-v2.

This is a _work-in-progress_. The motivation, in part, regards education regarding modern Javascript programming constructs such as classes, promises, arrow functions, etc. 
The other part of motivation regards my ownership of two Veralite controllers, and the current lack of Vera support for HomeKit. 

The first cut at the plugin has now been pushed to develop.  The only supported device is the dimmable light, 
as those are the kinds of devices I have installed in my home. The framework is now in place, however, 
to expand the number of supported devices. 

**_Update 2020-01-04_**: Recently, I've used the Vera iOS app a good deal while testing the plugin. I really like Vera's app alot, 
and it is my preferred app for the purpose of controlling it's attached zwave devices.  Considering my ownership of two 
Veralite controllers, there are aren't many other choices :), but the app is great.  I only wish that I could control 
all my home automation devices from my AppleTV 4K.

**_Update 2020-06-21_**: I'm in the final testing stages release 0-0-5. It improves the smoothness of dimming sliders by more efficient responses to change brightness.  It also adds control for color bulbs.

## Home App Screenshots of Served Devices

<img width="20%" src="https://github.com/sc3141/homebridge-plugin-vera/blob/readme-assets/home_screen.png?raw=true"></img>
<img width="20%" src="https://github.com/sc3141/homebridge-plugin-vera/blob/readme-assets/hubs_and_bridges_screen.png?raw=true"></img>
<img width="20%" src="https://github.com/sc3141/homebridge-plugin-vera/blob/readme-assets/homebridge_bridge_devices_screen.png?raw=true"></img>
<img width="20%" src="https://github.com/sc3141/homebridge-plugin-vera/blob/readme-assets/foyer_screen.png?raw=true"></img>
<img width="20%" src="https://github.com/sc3141/homebridge-plugin-vera/blob/readme-assets/sitting_room_screen.png?raw=true"></img>
<img width="20%" src="https://github.com/sc3141/homebridge-plugin-vera/blob/readme-assets/great_room_screen.png?raw=true"></img>
<img width="20%" src="https://github.com/sc3141/homebridge-plugin-vera/blob/readme-assets/cabinets_screen.png?raw=true"></img>

## Issues

Many homebridge plugins have to deal with an issue which regards the setting of the HomeKit characteristic, _Brightness_.
It seems that HomeKit chooses to set the state of the characteristic, _On_, during the same operation.  Developers of
various homebridge plugins have found workarounds, but these appear for the most part to involve the unsatisfying use of
delays to alter the timing of set requests between _On_ and other characteristics.  I have not tested color light bulbs, 
and the problem may extend to more than just the two aforementioned characteristics.  The topic is discussed in more 
detail in [this github issue](https://github.com/nfarina/homebridge/issues/807).  

To address the brightness idiosyncrasy, I have implemented a _tentative_ solution which avoids the use of delays.  Instead,
if specified in a 'device file' (e.g. src/luup_devices/dimmable_light_1.js), the property _changeOnly_ causes the plugin
to bind a special setter function to a HomeKit characteristic.  This setter queries the device for the current state of
the characteristic, and if the value is in fact the _target_ value, then the setter does not proceed with a superfluous
request to the device.  This solution has not been exercised in an industrial-strength testing scenario, but it appears
to solve the immediate problem of poor response to user manipulation of a dimming slider. 

The problem, however, is still not suppressed in the case of dimming operation for a light which is not currently 
switched on.  Under such a scenario, the plugin will choose to issue the 'On' command in addition to the 'Brightness' 
command. A race condition may be possible, and indeed, my own experience seems to confirm that interspersed 'On' commands
disrupt the successful completion of commands to change 'Brightness'.

The Vera LUUP architecture would seem to offer a mechanism by which a robust solution could be implemented.  Such a
solution would involve use of the UPNP event mechanism to receive notification of changes to state variables.  Communication
with the controller regarding an individual bridged accessory (i.e. device) would be sequentialized in such a manner as
to await confirmation of the completion of each outstanding command.


## Credits

I would like to acknowledge, in addition to @tonesto7, those whom he found helpful ...

* @tonesto7   [homebridge-smartthings-v2](https://github.com/tonesto7/homebridge-smartthings-v2)
* @sibartlett [homebridge-wink3](https://github.com/sibartlett/homebridge-wink3)
* @danTapps   [homebridge-hubconnect-hubitat](https://github.com/danTapps/homebridge-hubitat-hubconnect)


... As well as those with knowledge regarding the Vera UI7 API:

* @Be2daErtin [homebridge-bvera](https://github.com/Be2daErtin/homebridge-bvera)


## Installation:

 1. Install homebridge using: ```npm i -g homebridge``` (For Homebridge Install: [Homebridge Instructions](https://github.com/nfarina/homebridge/blob/master/README.md))
 2. Update your configuration file. See sample config.json snippet below.  This plugin requires that your Vera controller be assigned a static IP address.  The pluging cannot discover the address.

  <h3 style="padding: 0em .6em;">Config.json Settings Example</h3>

  <h4 style="padding: 0em .6em; margin-bottom: 5px;"><u>Example of all settings. Not all settings are required. Read the breakdown below</u></h4>

```
      "platform": "VeraController",
      "name": "Veralite",
      "controller_ip": "192.168.1.xxx", 
      "excluded_vera_device_types": [
        "urn:schemas-micasaverde-com:device:ZWaveNetwork"
      ],
      "logConfig": {
         "debug": false,
         "showChanges": true,
         "hideTimestamp": false,
         "hideNamePrefix": false,
         "file": {
            "enabled": true,
            "level": "good"
         }
      }
```


 * <p><u>platform</u> & <u>name</u>  <small style="color: orange; font-weight: 600;"><i>Required</i></small><br>
    This information is used by homebridge to identify the plugin and should be the settings above.</p>

 * <p><u>controller_ip</u>  <small style="color: #f92672; font-weight: 600;"><i>Required</i></small>
   The plugin is not capable of discovery of Vera controllers.  Therefore it is best to assign a static IP address to the target controller and specify the address here.
    
 * <p><u>excluded_vera_device_types</u><small style="color: #f92672; font-weight: 600;"><i> Optional</i></small> | <small style="color: green; font-weight: 600;"><i>Default: `[]` (None)</i></small><br>
   The plugin excludes those Vera devices types which, in the HomeKit context, do not map well to a HomeKit accessory.  In the case of incompatibility in an installation, devices may be excluded by the specification of their corresponding UPNP type here.  
   
 * <p>
   <u>logConfig</u><small style="color: #f92672; font-weight: 600;"><i> Optional</i></small><br>
   Define log output format options as well as enable the log file output

   - <u>debug</u><small style="color: #f92672; font-weight: 600;"><i> Optional</i></small> | <small style="color: green; font-weight: 600;"><i>Default: `false`</i></small><br>Enables Debug log output

   - <u>hideTimestamp</u><small style="color: #f92672; font-weight: 600;"><i> Optional</i></small> | <small style="color: green; font-weight: 600;"><i>Default: `false`</i></small><br>Hides timestamp prefix from console log output

   - <u>hideNamePrefix</u><small style="color: #f92672; font-weight: 600;"><i> Optional</i></small> | <small style="color: green; font-weight: 600;"><i>Default: `false`</i></small><br>Hides plugin name prefix (e.g. `[Veralite]`) from console log output

   - <u>file</u><small style="color: #f92672; font-weight: 600;"><i> Optional</i></small><br>
      Enable log file output and configure options

     - <u>enabled</u><small style="color: #f92672; font-weight: 600;"><i> Optional</i></small> | <small style="color: green; font-weight: 600;"><i>Default: `false`</i></small><br>
      Activates logging to file (homebridge-plugin-vera.log) stored in the same folder as the homebridge config.json

     - <u>level</u><small style="color: #f92672; font-weight: 600;"><i> Optional</i></small> | <small style="color: green; font-weight: 600;"><i>Default: `good`</i></small><br>
     Defines the log entry levels that are written to the file. `good`(recommended) is the default which will write all necessary entries.
   </p>

