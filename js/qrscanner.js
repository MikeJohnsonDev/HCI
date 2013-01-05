/**
 * Date: 04/01/13
 * Copyright © Michael Johnson 2013
 */

// Listener that will invoke the onDeviceReady() function as soon as phonegap has loaded properly
document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady()
{
	navigator.splashscreen.hide();

	window.plugins.barcodeScanner.scan(onSuccess, onError);
}

function onSuccess(result)
{
	/*
	alert("We got a barcode\n" +
				  "Result: " + result.text + "\n" +
				  "Format: " + result.format + "\n" +
				  "Cancelled: " + result.cancelled);*/

	$.mobile.changePage(result.text);
}

function onError(message)
{
	alert("Error: " + message);
}