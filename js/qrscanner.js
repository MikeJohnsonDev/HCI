/**
 * Date: 04/01/13
 * Copyright © Michael Johnson 2013
 */

// Listener that will invoke the onDeviceReady() function as soon as phonegap has loaded properly
document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady()
{
	navigator.splashscreen.hide();

	//navigator.camera.getPicture(onSuccess, onError, { quality: 50, sourceType: Camera.PictureSourceType.PHOTOLIBRARY, destinationType: Camera.DestinationType.DATA_URL });

	window.plugins.barcodeScanner.scan(onSuccess, onError);
}

function onSuccess(result)
{
	//var canvas = document.getElementById("qr-canvas");
	//var ctx = canvas.getContext("2d");
	//var img = new Image();
	//img.onload = function ()
	//{
	//	canvas.width = this.width;
	//	canvas.height = this.height;
	//	ctx.drawImage(img, 0, 0);
	//};

	//img.src = "data:image/jpeg;base64," + imageUri;

	//var qrImage = document.getElementById("qrImage");

	//qrImage.src = "data:image/jpeg;base64," + imageUri;

	//qrcode.callback = function (data)
	//{
	//	alert(data);
	//};

	//qrcode.decode(qrImage.src);
	
	alert("We got a barcode\n" +
				  "Result: " + result.text + "\n" +
				  "Format: " + result.format + "\n" +
				  "Cancelled: " + result.cancelled);
}

function onError(message)
{
	alert("Error: " + message);
}