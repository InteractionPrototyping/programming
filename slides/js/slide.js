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