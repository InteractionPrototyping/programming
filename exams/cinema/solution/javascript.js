/* note: two global variables created in cinema.js:
   var movies = [...]
   var schedule [...]
*/

/* your JS goes here */

/* REQ 25: open and close details */
function hideDetails() {
    $('#movies').show('slide', {direction: 'left'});
    $('#details').hide('slide', {direction: 'right'});
}

/* REQ 25: open and close details */
function showDetails(movie) {
    $('#movies').hide('slide', {direction: 'left'});
    $('#details').show('slide', {direction: 'right'});
    
    /* REQ 27: update details programmatically */
    $('#details h1').html(movie.title);
    $('#details-image').css('background-image', 'url("images/photos/'+movie.image+'.jpg")');
    $('#details-title').html(movie.title);
    $('#details-director').html(movie.director);
    $('#details-actors').html(movie.actors.join(", "));
    $('#details-release').html((new Date(movie.release)).toLocaleDateString());
    $('#details-imdbrating').val(movie.imdbrating);
};

/* REQ 26: create item programmatically */
function createMovieItem(movie, schedule) {
    var item = $('<div>').addClass('movie').click(function() {
        showDetails(movie);
    });
    
    $('<img>').attr('alt', movie.title).attr('src', 'images/posters/'+movie.image+'.jpg').appendTo(item);
    $('<span>').addClass('title').html(movie.title).appendTo(item);
    $('<span>').addClass('genre').html(movie.genre).appendTo(item);
    var info = $('<span>').addClass('info').appendTo(item);
    $('<span>').addClass('rating').html(movie.rating).appendTo(info);
    $('<i>').addClass('fa fa-clock-o').appendTo(info);
    $('<span>').addClass('duration').html(movie.runtime + ' min.').appendTo(info);
        var times = $('<span>').addClass('schedule').html(schedule.join(', ')).appendTo(item);
    var times = $('<i>').addClass('fa fa-calendar-o').prependTo(times);
    $('<i>').addClass('more fa fa-chevron-right').appendTo(item);
    
    return item;
}

/* REQ 26: show list of items programmatically */
function listMovies(day) {
    $('.movie').remove();
    for (movie in movies) {
        console.log('Processing ' + movies[movie].title);
        var showtimes = schedule[day][movies[movie].title];
        if (showtimes.length > 0) {
            $('#movies .content').append(createMovieItem(movies[movie], showtimes));
        }
    }
}

$(function() {
    listMovies(0);
    
    $('#dateselector').change(function() {
        listMovies($(this).val());
    });
});