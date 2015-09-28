/*Reqs. 21 & 22 */
var currentDay = 0;

function previousDay() {
    if (currentDay > 0) {
        currentDay--;
        $('#dateselect').html(weather[currentDay].date);
        
        /*Req. 25*/
        loadInformation()
    }
}

function nextDay() {
    if (currentDay < weather.length - 1) {
        currentDay += 1;
        document.getElementById('dateselect').innerHTML = weather[currentDay].date;
        
        /*Req. 25*/
        loadInformation()
    }
}

/*Req. 23*/
function loadInformation() {
    var weatherInformation = weather[currentDay];
    
    $('#image img').attr('src', 'weather/' + weatherInformation.condition + '.png');
    $('#temperature .max').html(weatherInformation.max+'°');
    $('#temperature .min').html(weatherInformation.min+'°');
    $('#text').html(weatherInformation.description);
    
    /*Req. 24*/
    $('#details').html(buildDetailsTable());
    $('#overlay h2').text(weatherInformation.date);
}


/*Req. 24*/
function buildDetailsTable() {
    var result = '<tr><th>Zeit</th><th>Wetter</th><th>Temp.</th><th>Regen</th><th>Wind</th></tr>';
    
    var weatherInformation = weather[currentDay];
    
    for(i = 0; i < 4; i++) {
        result += '<tr>';  
        result += '<td>' + convertDaytime(weatherInformation.detail[i].hour) + '</td>';
        result += '<td><img src="weather/' + weatherInformation.detail[i].condition + '.png"></td>';
        result += '<td>' + weather[currentDay].detail[i].temp + '°</td>';
        result += '<td>' + weatherInformation.detail[i].rainrisk + '%</td>';
        result += '<td>' + weatherInformation.detail[i].wind + ' km/h<br>'+windspeedToText(weatherInformation.detail[i].wind)+'</td>';
        result += '</tr>';
    }
    
    return result;
}

/*Req. 25*/
function convertDaytime(hour) {
    if (hour <= 6) return "Morgens";
    else if (hour <= 12) return "Mittags";
    else if (hour <= 18) return "Abends";
    else return "Nachts";
}
/*Req. 26*/
function windspeedToText(v) {
    return beaufort[Math.round(Math.pow((v/3.010),2/3))];
}


