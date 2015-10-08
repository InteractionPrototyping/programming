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
    "<br>Longitude: " + position.coords.longitude;	
}