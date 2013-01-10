/**
 * Date: 10/01/13
 * Copyright © Michael Johnson 2013
 */

function loadFavourites()
{
	var favourites = JSON.parse(localStorage.getItem("favourites"));

	if (favourites == null)
	{
		favourites = [];
	}

	return favourites;
}

function saveFavourites(favourites)
{
	localStorage.setItem("favourites", JSON.stringify(favourites));
}

function addFavourite(favourite)
{
	var favourites = loadFavourites();

	favourites.push(favourite);

	saveFavourites(favourites);
}

function addToFavourites(url, name)
{
	addFavourite({
		url: url,
		name: name
	});
}