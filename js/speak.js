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

function speak()
{
	if ($("#speakButton").children().text() == "Click here to start recording your story or fact")
	{
		$("#speakButton").children().text("Stop");

		if (media == null)
		{
			media = new Media("speak.mp3", console.log("Created media."),
							  console.log("Error creating media."));
		}
		
		media.startRecord();
	}
	else
	{
		$("#speakButton").children().text("Click here to start recording your story or fact");

		media.stopRecord();
	}
}