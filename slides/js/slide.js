/* slides.js
   Interaction Prototyping Block Course
*/


/*	A Web Applications			     */
/*	  And Technology				 */

$(document).ready(function(){
    $(".answer").click(function(){
        $("#Technology_Internet_question").hide();
        $("#Technology_Internet_answer").show();
    });
});

function hello() {
    alert("Hello\nHow are you?");
}

/*           H APIs              */

// get Location as coordinates
var x = document.getElementById("location");

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else { 
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}

function showPosition(position) {
    x.innerHTML = "Latitude: " + position.coords.latitude + 
    " Longitude: " + position.coords.longitude;	
}

// get Location shown in Map
var x = document.getElementById("map");

function getMapLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showMapPosition);
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}

function showMapPosition(position) {
    var latlon = position.coords.latitude + "," + position.coords.longitude;

    var img_url = "http://maps.googleapis.com/maps/api/staticmap?center="
    +latlon+"&zoom=14&size=400x300&sensor=false";
    document.getElementById("mapholder").innerHTML = "<img src='"+img_url+"'>";
}
