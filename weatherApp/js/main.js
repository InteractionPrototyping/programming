// Global Variable of currently selected day (initialized with 0)
var currentDay = 0;
// Global Varibale of current Weekday for receiving the current Weekday from weekdays Array
var currentWeekDay = 0;

// Global Variable for weather data
var weather = {};

// Global Variable for Temperature Unit: C (Celsius) or F (Fahrenheit)
var tempUnit = 'C'

// Global Variable for Windspeed Unit: k (Kilometer) or m (Miles)
var windUnit = 'k'

// Default city data
var cities = [
    {
        name: 'Berlin',
        location: {
            'lat': 52.52000659999999,
            'lng': 13.404954
        }
    },
    {
        name: 'Paris',
        location: {
            'lat': 48.856614,
            'lng': 2.3522219
        }
    }
];

// Default active city: Berlin
var activeCity = cities[0];

// ColorCodes

var colorCodes = [
    {
        range: 'cold',
        code: '#3b85b4'
    },
    {
        range: 'warm',
        code: '#45B29D'
    },
    {
        range: 'hot',
        code: '#e05111'
    },
];
// current Color Scheme
var activeColor = colorCodes[0];

// Executed right after the HTML is loaded completly
$(function () {

    // update the date to the current day
    changeCurrentDay(0);
    // get Weather Data through API
    getApiData(activeCity.location.lat, activeCity.location.lng);

    /**
     * Display city list
     */

    showCityList();

	// Close sidebar
	document.getElementById('close-sidebar').onclick = function () {
		console.log('clicked sidebar');
		document.getElementById('sidebar').style.left = "-70%";
		// Later use: toggleSidebar();
	};

	// Open sidebar
	document.getElementById('open-sidebar').onclick = function () {
		console.log('clicked sidebar');
		document.getElementById('sidebar').style.left = "0";
		// Later use: toggleSidebar();
	};

	document.getElementById('footer').firstChild.onclick = function () {
        console.log('clicked details');
        toggleDetails();
    };

    /* Event Handler that updates the currently order*/
    $('#citylist').sortable({
        stop: function () {
            var newPositions = $(this).sortable('toArray');
            console.log('Cities sorted. New order: ', newPositions);
        }
    });

	/**
	 * Returns a newArray containing the elements of oldArray sorted by newPositions
	 *
	 * @param oldArray
	 * @param newPositions
	 * @return {Array}
	 */
	function updateArraySorting(oldArray, newPositions) {
		// Initialize the new array
		var newArray = new Array();
		// Go trough new positions and build sorted array
		$.each(newPositions, function(i, p) {
			// add the object at this position from the old array to the new array
			newArray.push(oldArray[p]);
		});
		// Return the sorted array
		return newArray;
	}

    /**
     * Click handler for add city button
     */
    $('#city-add').click(this, function () {
        // Get city name
        var cityName = $('#city-input').val();

        // If a city was entered
        if (cityName.length > 0) {
            // Empty the textfield
            $('#city-input').val('');

            // Use Google Geocoding to look up coordinates and then add to citylist
            getCoordinates(cityName, function (geolocation) {
                // Add object to city data
                addCity({
                    name: cityName,
                    location: geolocation
                });
            });
        }

        // Toggle city input icon
        $(this).find('i').toggleClass('fa-plus');
        $(this).find('i').toggleClass('fa-check');

        // Show input text field
        $('#city-input').toggle(200);
        // Focus the text field for input
        $('#city-input').focus();
    });


    /*
	 Click handler for location button
	 */

    $('#locate-me').click(function () {
        // Show Loading Overlay
        showLoadingIndicator();
        // Determine location via GPS
        getLocation(function (location) {
            var location = {
                lat: location.coords.latitude,
                lng: location.coords.longitude
            };

            // use reverse geocoding to get cityname
            getCityName(location, function (cityname) {
                // Save city to city list
                var city = {
                    name: cityname,
                    location: location
                };
                addCity(city);
                // Change active city
                activeCity = city;
                getApiData(activeCity.location.lat, activeCity.location.lng);
            })
        });
    });
});

/**    Function to change the global variable currentDay
 *        called by the two Buttons with a delta (1 or -1)
 *
 *        @param    delta    value, the day is increased (pos. values) or decreased ()
 */

function changeCurrentDay(delta) {
    currentDay += delta;
    // after de-/increasing the value limit the parameter to 0-6
    currentDay = Math.min(Math.max(parseInt(currentDay), 0), 6);

    // get current Date
    var today = new Date();
    var nextDay = new Date(today);
    nextDay.setDate(today.getDate() + currentDay);

    // now update the displayed Date to one of the values from the weekdays array
    document.getElementById('datedisplay').innerHTML = nextDay.toLocaleDateString();

    // dont update HTML if date is initialized
    if (delta != 0) {
        // update Weather Data
        updateWeatherMainHTML();
        updateWeatherDetailHTML();
    }

	// Hide arrows at beginning and end
	if (currentDay == 0)  {

	}

	// Hide details button for > 2 days in the future (only day 0, day 1 have detailed data)
	if (currentDay > 1) {
		document.getElementById('footer').style.display = "none";
	} else {
		document.getElementById('footer').style.display = "block";
	}

    console.log('Function: changeCurrentDay()');
}

/**        Function for showing and hiding the sidebar
 *        using jQuery because it makes it just so much easier
 */
function toggleSidebar() {
    // if sidebar is already displayed, hide it
	var elem = document.getElementById('#sidebar');

	// if details page is already displayed, hide it
	if(elem.style.display == "none"){
		elem.style.display = "block";
	}else{
		elem.style.display = "none";
	}

    console.log('Function: toggleSidebar()');
}

/**        Function for showing and hiding the Details page
 *        using jQuery because it makes it just so much easier
 */

function toggleDetails() {

	var elem = document.getElementById('#detailview');

    // if details page is already displayed, hide it
	if(elem.style.display == "none"){
		elem.style.display = "block";
	}else{
		elem.style.display = "none";
	}

    console.log('Function: toggleDetails()');
}

/**     Function for receiving the API Weather Data
 *      using jQuery
 *      @param lat - latitude value
 *      @param lng - longitude value
 */

function getApiData(lat, lng) {
    showLoadingIndicator();
    $.getJSON('http://api.forecast.io/forecast/04b2f6e3ed72c29396c0e78463b8866a/' + lat + ',' + lng + '?callback=?')
        .done(function (data) {
            //console.log(JSON.stringify(data));
            weather = data;
            updateWeatherMainHTML();
            updateWeatherDetailHTML();
            hideLoadingIndicator();
        });
}

/**
 * Function for generating the HTML Output for the MainView
 */

function updateWeatherMainHTML() {
    //update all fields with the weather data
    document.getElementById('city').innerHTML = activeCity.name;
    if(weather.daily.data[currentDay]) {
        document.getElementById('iconimage').src = 'img/' + weather.daily.data[currentDay].icon + '.png';
        document.getElementById('summary').innerHTML = weather.daily.data[currentDay].summary;
        document.getElementById('temperature').innerHTML = convertTemperature(weather.daily.data[currentDay].temperatureMax, tempUnit);
        document.getElementById('winddisplay').innerHTML = convertWindspeed(weather.daily.data[currentDay].windSpeed, windUnit);
        document.getElementById('humiditydisplay').innerHTML = convertHumidity(weather.daily.data[currentDay].humidity);
        updateColorScheme(weather.daily.data[currentDay].temperatureMax);
    } else {
        document.getElementById('iconimage').src = '';
        document.getElementById('summary').innerHTML = '';
        document.getElementById('temperature').innerHTML = '';
        document.getElementById('winddisplay').innerHTML = '';
        document.getElementById('humiditydisplay').innerHTML = '';
        updateColorScheme(0);
    }
    console.log('Function: updateWeatherMainHTML()');
}


/**
 * Show a loading indicator overlay while Loading
 */
function showLoadingIndicator() {
    $('#overlay-loading-indicator').fadeIn(500);
}
/**
 * Hide the loading indicator
 */
function hideLoadingIndicator() {
    $('#overlay-loading-indicator').fadeOut(500);
}

/*
*        Function for generating the HTML Output for the MainView
 */

function updateWeatherDetailHTML() {
    var html = '';
    var item = null;

    // get current hour of the day
    var currentHour = new Date().getHours();

    // set for limits, because the WeatherAPI gives detailed-data for the next 2 days;
    var i, start, limit;
    // if currentDay is today
    if (currentDay == 0) {
        start = currentDay * 24;
        end = 24 - currentHour + currentDay * 24;
        // if current day is tomorrow
    } else if (currentDay == 1) {
        start = 24 - currentHour;
        end = 24 - currentHour + currentDay * 24 + 1;
        // if current day is day after tomorrow
    } else if (currentDay == 2) {
        start = currentDay * 24 - currentHour;
        end = weather.hourly.data.length;
    }


    // just generate the detail table if currentDay is max 2 days in future due to the limited weather data
    if (currentDay <= 2) {
        // iterate through the date object till the day is over (i < 24h)
        for (i = start; i < end; i++) {
            item = weather.hourly.data[i];
            html += '<div class="row">' +
                '<span class="time">' + new Date(item.time * 1000).getHours() + ':00</span>' +
                '<span class="icon"><img src="img/' + item.icon + '.png" alt="' + item.icon + '"></span>' +
                '<span class="temperature">' + convertTemperature(item.temperature, tempUnit) + '</span>' +
                '<span class="wind">' + convertWindspeed(item.windSpeed, windUnit) + '</span>' +
                '<span class="humidity">' + convertHumidity(item.humidity) + '</span>' +
                '</div>';
        }
    } else {
        html = '<div class="row"><h1 class="text-center">No data</h1></div>';
    }
    // update HTMl
    document.getElementById('detailtable').innerHTML = html;
    document.getElementById('detailview-city').innerHTML = activeCity.name;

    console.log('Function: updateWeatherDetailHTML()');
}

/**     Function to change the Color Scheme
 */
function updateColorScheme(temp) {
    // distinguish between temperatures in F
    if (parseInt(temp) <= 68) {
        activeColor = colorCodes[0];
    } else if (parseInt(temp) > 68 && parseInt(temp) <= 86) {
        activeColor = colorCodes[1];
    } else {
        activeColor = colorCodes[2];
    }
    //$('#mainview').css('background-color', activeColor.code);
	document.getElementById('mainview').style.backgroundColor = activeColor.code;
    //$('#detailsview').css('background-color', activeColor.code);
	document.getElementById('detailview').style.backgroundColor = activeColor.code;
}


/**     Function to convert Fahrenheit to Celcius
 *       and round that to the next full Number and add the unit
 */
function convertTemperature(temp, unit) {
    var convertedTemp = 0;
    if (unit === 'C') {
        convertedTemp = Math.round((parseInt(temp) - 32) * 5 / 9) + '°C';
    } else if (unit === 'F') {
        convertedTemp = Math.round(temp) + ' F';
    }
    return convertedTemp;
}

function changeTempUnit(unit) {
    // check if unit will change
    if (tempUnit !== unit) {
        // set global Temp Variable
        tempUnit = unit;
        // reload data and refresh HTML
        getApiData(activeCity.location.lat, activeCity.location.lng);
        // Set sibling button to active css class
        $('#settings-temp .active').removeClass('active').siblings('.btn-square').addClass('active');
        // close Sidebar
        toggleSidebar();
    }
}

/**     Function to convert the humidity and add the unit
 */
function convertHumidity(humid) {
    return Math.round(humid * 100) + ' %';
}

/**     Function to convert the windspeed and add the unit
 */

function convertWindspeed(wind, unit) {
    var convertedWind = 0;
    if (unit === 'k') {
        convertedWind = Math.round(wind * 1.6) + ' km/h';
    } else if (unit === 'm') {
        convertedWind = Math.round(wind) + ' m/s';
    }
    return convertedWind;
}

function changeWindUnit(unit) {
    // check if unit will change
    if (windUnit !== unit) {
        windUnit = unit;
        // reload data and refresh HTML
        getApiData(activeCity.location.lat, activeCity.location.lng);
        // Set sibling button to active css class
        $('#settings-wind .active').removeClass('active').siblings('.btn-square').addClass('active');
        // close Sidebar
        toggleSidebar();
    }
}

/**
 * LOCATION FUNCTIONS
 */

function showCityList() {

    var citylist = $('#citylist');

    // Clear all content from list
    citylist.empty();

    var cityItem;

    // Cycle trough cities and add them to DOM
    $.each(cities, function (c, city) {
        // Create list item
        cityItem = $('<li>').html(city.name).addClass('city').attr('id', c);

        // First item is active
        if (c == 0) {
            cityItem.addClass('active');
        }

        // Append item to city list
        cityItem.appendTo(citylist);

        // Install click listener with custom jQuery plugin
        cityItem.setCityClickable();
    });
}

/**
 * Determine the current device location
 * @param callback
 */

function getLocation(callback) {
    if (navigator.geolocation) {
        return navigator.geolocation.getCurrentPosition(callback);
    } else {
        throw ('Geolocation is not supported by this browser.');
    }
}

/**
 * Loads geocoordinates for a given city and passes them to the callback
 *
 * @param cityname
 * @param callback for processing location
 */
function getCoordinates(cityname, callback) {

    var url = 'https://maps.googleapis.com/maps/api/geocode/json';
    var data = {
        key: 'AIzaSyBJIJgx9RT6J1o-Xd-roM0q7F4QXEzltns',
        address: cityname
    };
    showLoadingIndicator();
    $.getJSON(url, data, function (result) {
        var geolocation = result.results[0].geometry.location;
        callback(geolocation);
        hideLoadingIndicator();
    });
}

/**
 * Function for reverse Geocoding
 *
 * @param location
 * @param callback
 */
function getCityName(location, callback) {

    var url = 'https://maps.googleapis.com/maps/api/geocode/json';
    var data = {
        key: 'AIzaSyBJIJgx9RT6J1o-Xd-roM0q7F4QXEzltns',
        latng: location.lat + ',' + location.lng
    };

    console.log('Reverse geocoding:' + data.latng);
    showLoadingIndicator();
    $.ajax(url, {
        data: 'key=' + data.key + '&latlng=' + data.latng,
        processData: false,
        success: function (result) {
            hideLoadingIndicator();
            if (result.results.length == 0) {
                alert('Could not identify in which city you are located');
                return false;
            }

            var cityname = result.results[0].address_components[2].short_name;
            console.log('Found location: ' + cityname, result.results[0].address_components);
            callback(cityname);
        }
    });
}


/*
 * Function to add a city to the list
 */

function addCity(city) {

    // Prevent duplicate cities
    // First get all citynames
    var citynames = $.map(cities, function (city) {
        return city.name;
    });

    console.debug(citynames);

    // Add only cities with a name we don't have yet
    if ($.inArray(city.name, citynames) === -1) {
        cities.push(city);
    } else {
        console.log('City ' + city.name + ' is already in the list');
        return false;
    }

    // Create list item
    cityItem = $('<li>').html(city.name).addClass('city').attr('id', cities.length - 1);

    // Append item to city list
    cityItem.appendTo(citylist);

    // Install click listener with custom jQuery function
    cityItem.setCityClickable();
}

/**
 * Returns a newArray containing the elements of oldArray sorted by newPositions
 *
 * @param oldArray
 * @param newPositions
 * @returns {Array}
 */
function updateArraySorting(oldArray, newPositions) {
    // Initialize the new array
    var newArray = new Array();
    // Go trough new positions and build sorted array
    $.each(newPositions, function (i, p) {
        // add the object at this position from the old array to the new array
        newArray.push(oldArray[p]);
    });
    // Return the sorted array
    return newArray;
}

/**
 * Define our own jQuery Plugin to make a city clickable
 */
(function ($) {
    $.fn.extend({
        setCityClickable: function () {
            $(this).click(function () {
                $(this).siblings().removeClass('active');
                $(this).addClass('active');
                activeCity = cities[$(this).attr('id')];
                console.log('New active city: ', activeCity);
                getApiData(activeCity.location.lat, activeCity.location.lng);
                toggleSidebar();
            });
        }
    });
})(jQuery);