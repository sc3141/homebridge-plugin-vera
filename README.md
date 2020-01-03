# homebridge-plugin-vera

This will be primarily based off of the excellent @tonesto7 homebridge-smartthings-v2.

This is a _work-in-progress_. The motivation, in part, regards education regarding modern Javascript programming constructs such as classes, promises, arrow functions. 
The other part of motivation regards my ownership of two Veralite controllers, and the current lack of Vera support for HomeKit.

The first cut at the plugin has now been pushed to develop.  The only supported device is the dimmable light, 
as those are the kinds of devices I have installed in my home. The framework is now in place, however, 
to expand the number of supported devices. 


## Issues

There is an outstanding issue with respect to dimmers regarding the reliability / performance of setting brightness. 
This issue has been encountered by many homebridge-plugin developers.  HomeKit apparently prefaces each command to set 
brightness with a (most-often superfluous) command to turn power on.  
These superfluous commands can disrupt the proper response of a zwave dimmer to commands to set brightness.  

## Goals

- Improve my modern Javascripts skills.
- Understand the Vera API
- Allow reasonably complete control of Veralite via the Apple Home app.

## Credits

I would like to acknowledge, in addition to @tonesto7, those whom he found helpful ...

* @tonesto7   [homebridge-smartthings-v2](https://github.com/tonesto7/homebridge-smartthings-v2)
* @sibartlett [homebridge-wink3](https://github.com/sibartlett/homebridge-wink3)
* @danTapps   [homebridge-hubconnect-hubitat](https://github.com/danTapps/homebridge-hubitat-hubconnect)


... As well as those with knowledge regarding the Vera UI7 API:

* @Be2daErtin [homebridge-bvera](https://github.com/Be2daErtin/homebridge-bvera)
