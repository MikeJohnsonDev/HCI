/**
 * Date: 05/01/13
 * Copyright © Michael Johnson 2013
 */

// Listener that will invoke the onDeviceReady() function as soon as phonegap has loaded properly
document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady()
{
	navigator.splashscreen.hide();

	$("#qrScanner").addEventListener("click", function ()
	{
		window.plugins.barcodeScanner.scan(onSuccess, onError);
	}, false);
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