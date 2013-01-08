/**
 * Date: 06/01/13
 * Copyright © Michael Johnson 2013
 */

function loadSettings()
{
	var settings = JSON.parse(localStorage.getItem("settings"));

	if (settings == null)
	{
		settings = {
			largeText: false,
			invertColours: false,
			keepScreenOn: false,
			magnifier: false,
			language: "en"
		};
	}

	return settings;
}

function saveSettings(settings)
{
	localStorage.setItem("settings", JSON.stringify(settings));
}