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

	alert("hi");
}

function speak()
{
	if ($("#speakButton").text() == "Speak")
	{
		$("#speakButton").text("Stop");

		if (media == null)
		{
			media = new Media("audio/speak.mp3", console.log("Created media."),
							  alert("Error creating media."));
		}
		
		media.startRecord();
	}
	else
	{
		$("#speakButton").text("Speak");

		media.stopRecord();
	}
}