/**
 * Date: 08/01/13
 * Copyright © Michael Johnson 2013
 */

var media;

// Listener that will invoke the onDeviceReady() function as soon as phonegap has loaded properly
document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady()
{
	navigator.splashscreen.hide();
}

function listen()
{
	navigator.notification.alert($("#listenButton").text());
	alert($("#listenButton").html());

	if ($("#listenButton").text() == "Listen")
	{
		$("#listenButton").text("Stop");

		if (media == null)
		{
			media = new Media("audio/listen.mp3", console.log("Created media."),
							  alert("Error creating media."));
		}

		media.play();
	}
	else
	{
		$("#listenButton").text("Listen");

		media.stop();
	}
}