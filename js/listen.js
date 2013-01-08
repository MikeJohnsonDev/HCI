/**
 * Date: 08/01/13
 * Copyright © Michael Johnson 2013
 */

var listenMedia;

// Listener that will invoke the onDeviceReady() function as soon as phonegap has loaded properly
document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady()
{
	navigator.splashscreen.hide();

	$("#listenButton").click(function ()
	{
		alert("test");
		listen();

		return false;
	});
}

function listen()
{
	alert($("#listenButton").text());
	alert($("#listenButton").html());

	if ($("#listenButton").text() == "Listen")
	{
		$("#listenButton").text("Stop");

		if (listenMedia == null)
		{
			listenMedia = new Media("audio/listen.mp3", console.log("Created listenMedia."),
							  alert("Error creating listenMedia."));
		}

		listenMedia.play();
	}
	else
	{
		$("#listenButton").text("Listen");

		listenMedia.stop();
	}
}