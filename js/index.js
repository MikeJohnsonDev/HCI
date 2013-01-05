/**
 * Date: 05/01/13
 * Copyright © Michael Johnson 2013
 */

// Listener that will invoke the onDeviceReady() function as soon as phonegap has loaded properly
document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady()
{
	navigator.splashscreen.hide();
}