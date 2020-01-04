# homebridge-plugin-vera

This will be primarily based off of the excellent @tonesto7 homebridge-smartthings-v2.

This is a _work-in-progress_. The motivation, in part, regards education regarding modern Javascript programming constructs such as classes, promises, arrow functions. 
The other part of motivation regards my ownership of two Veralite controllers, and the current lack of Vera support for HomeKit. 

**_Update 2020-01-04_**: Recently, I've used the Vera iOS app a good deal while testing the plugin. I really like Vera's app alot, 
and it is my preferred app for the purpose of controlling it's attached zwave devices.  Considering my ownership of two 
Veralite controllers, there are aren't many other choices :), but the app is great.  I only wish that I could control 
all my home automation devices from my AppleTV 4K.

The first cut at the plugin has now been pushed to develop.  The only supported device is the dimmable light, 
as those are the kinds of devices I have installed in my home. The framework is now in place, however, 
to expand the number of supported devices. 

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


## Goals

- Improve my modern Javascript skills.
- Understand the Vera API
- Allow reasonably complete control of Veralite via the Apple Home app.

## Credits

I would like to acknowledge, in addition to @tonesto7, those whom he found helpful ...

* @tonesto7   [homebridge-smartthings-v2](https://github.com/tonesto7/homebridge-smartthings-v2)
* @sibartlett [homebridge-wink3](https://github.com/sibartlett/homebridge-wink3)
* @danTapps   [homebridge-hubconnect-hubitat](https://github.com/danTapps/homebridge-hubitat-hubconnect)


... As well as those with knowledge regarding the Vera UI7 API:

* @Be2daErtin [homebridge-bvera](https://github.com/Be2daErtin/homebridge-bvera)
