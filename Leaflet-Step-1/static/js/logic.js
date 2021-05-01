console.log("logic.js loaded")

// Store our API endpoint inside queryUrl
// var queryUrl = "https://earthquake.usgs.gov/earthquakes/map/?extent=-87.25291,-187.73438&extent=87.21901,547.73438&range=" + 
// "search&timeZone=utc&search=%7B%22name%22:%22Search%20Results%22,%22params%22:%7B%22starttime%22:%222021-04-23%2000:00:00%22,%22endtime%22:%222021-04-30%2023:59:59%22,%22minmagnitude%22:2.5,%22orderby%22:%22time%22%7D%7D";

// var queryUrl = "https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2021-04-23&endtime=" +
//   "2021-04-30&maxlongitude=-69.52148437&minlongitude=-123.83789062&maxlatitude=48.74894534&minlatitude=25.16517337";

  var queryUrl = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson"
 
  console.log(queryUrl);

// Perform a GET request to the query URL
d3.json(queryUrl).then(function(data) {
    // Once we get a response, send the data.features object to the createFeatures function
    
    console.log(data.features);

    createFeatures(data.features);
  });

  

 