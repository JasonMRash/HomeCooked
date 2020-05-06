var mymap = L.map('mapid').setView([39.438224, -98.694652], 15);

  L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoiamFzb25tcmFzaCIsImEiOiJjazl1MWEwZDExbTZiM2hxcXJhc2l1cWxlIn0.COE3yFQG4gTct62pMkHnmA'
  }).addTo(mymap);

  L.marker([39.438224, -98.694652]).addTo(mymap)
		.bindPopup("<b>Home Cooked</b><br />123 Main Street<br />Osborne, KS 67473").openPopup();