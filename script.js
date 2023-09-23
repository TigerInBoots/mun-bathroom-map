/*
This creates the map
We turned the map into a variable called "map"
So now we can just do "map.[something] to edit the map

It's centered at the coordinates of the MUN campus

The "zoom" property is a bit confusing to explain
Basically, a "zoom" of 1 means you're really far away
So larger numbers mean you're closer
"minZoom" is the farthest you can zoom away
"maxZoom" is the farthest you can zoom in 
*/

var map = L.map('map', {
    center: [47.57411982117247, -52.73536088996898],
    zoom: 14.5,
    minZoom: 14.5,
    maxZoom: 19
});

/* 
This creates boundaries for the map
Basically, it makes it so you can't scroll past the MUN campus
Otherwise, you could just go anywhere 
*/

map.setMaxBounds(map.getBounds());

/*
This creates a variable called "popup"
We can edit this to change what appears in the popups and such 
*/

var popup = L.popup();

/* 
This probably won't be in the final version
It's more just for testing
Basically, when you click on the map it'll get the coordinates for that location 
*/

function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent(e.latlng.toString())
        .openOn(map);
}

/* 
This allows stuff to happen when you click on the map
*/

map.on('click', onMapClick);

/* 
This is basically just the copyright for the map
*/

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

/* 
Please don't ask me how any of this works
I have no idea
*/