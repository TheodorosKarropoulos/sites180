"use strict";

window.onload = function loadImageBoxes(){
	
	var imageboxes = [
		{
			image: "img/chicago.jpg",
			text: "Lorem ipsum dolor sit amet, vitae suscipiantur vim ut. No ius ubique eripuit reformidans, cum cu ullum democritum consetetur.",
			link: "#"
		},
		{
			image: "img/film_camera.jpg",
			text: "Lorem ipsum dolor sit amet, vitae suscipiantur vim ut. No ius ubique eripuit reformidans, cum cu ullum democritum consetetur.",
			link: "#"
		},
		{
			image: "img/gibson-les-paul.jpg",
			text: "Lorem ipsum dolor sit amet, vitae suscipiantur vim ut. No ius ubique eripuit reformidans, cum cu ullum democritum consetetur.",
			link: "#"
		},
		{
			image: "img/starwars-linux-wallpapers.jpg",
			text: "Lorem ipsum dolor sit amet, vitae suscipiantur vim ut. No ius ubique eripuit reformidans, cum cu ullum democritum consetetur.",
			link: "#"
		},
		{
			image: "img/UbuntuMinimalist.jpg",
			text: "Lorem ipsum dolor sit amet, vitae suscipiantur vim ut. No ius ubique eripuit reformidans, cum cu ullum democritum consetetur.",
			link: "#"
		}
	];

	var photosContainer = document.getElementById('photos-container');

	for(var key in imageboxes) {
		var photoBox = document.createElement('div');
		var imageRow = document.createElement('div');
		var textRow = document.createElement('div');
		var linkRow = document.createElement('div');

		photoBox.setAttribute('class', 'photo-box');
		imageRow.setAttribute('class', 'row image-row');
		textRow.setAttribute('class', 'row');
		linkRow.setAttribute('class', 'row');

		imageRow.innerHTML = "<img src='" + imageboxes[key].image + "' />";
		textRow.innerHTML = "<p>" + imageboxes[key].text + "</p>";
		linkRow.innerHTML = "<a href='" + imageboxes[key].link + "' class='button-info'>Visit</a>";

		photoBox.appendChild(imageRow);
		photoBox.appendChild(textRow);
		photoBox.appendChild(linkRow);

		photosContainer.appendChild(photoBox);
	}
}
