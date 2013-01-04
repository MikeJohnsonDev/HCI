/**
 * Date: 04/01/13
 * Copyright © Michael Johnson 2013
 */

// Listener that will invoke the onDeviceReady() function as soon as phonegap has loaded properly
document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady()
{
	navigator.splashscreen.hide();

	document.addEventListener("backbutton", onBackClickEvent, false); // Adding the back button listener
	alert("Ready!");
}

var app = {
	// Application Constructor
	initialize: function()
	{
		this.bindEvents();
	},
	// Bind Event Listeners
	//
	// Bind any events that are required on startup. Common events are:
	// `load`, `deviceready`, `offline`, and `online`.
	bindEvents: function()
	{
		document.addEventListener('deviceready', this.onDeviceReady, false);
	},
	// deviceready Event Handler
	//
	// The scope of `this` is the event. In order to call the `receivedEvent`
	// function, we must explicity call `app.receivedEvent(...);`
	onDeviceReady: function()
	{
		app.receivedEvent('deviceready');
	},
	// Update DOM on a Received Event
	receivedEvent: function(id)
	{

	}
};