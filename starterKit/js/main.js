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
// current Color Sheme
var activeColor = colorCodes[0];

// Executed right after the HTML is loaded completly
$(function () {

    
});
