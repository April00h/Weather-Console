// global var
var apiKey = "411f4af06666b68c0b3ffe9e5b572d71"
var currentCity = "411f4af06666b68c0b3ffe9e5b572d71";
var lastCity = "411f4af06666b68c0b3ffe9e5b572d71";

// search button 
$(document).ready(function () {
    $("#search-button").on('click', function () {
        //get search-value.
        var city = $("#search-value").val();
        $("#search-value").val("");
        getWeather(city);
        getForecast(city);
    });
})

$("#search-value").keyup(function (event) {
    if (event.keyCode === 13) {
        $("#search-button").click();
        getWeather(city);
        getForecast(city);
    }
});


// today's weather
function getWeather(city) {
    var weather = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=" + apiKey + "&units=imperial"
    fetch(weather)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data)
        });
        saveSearch(city);
        pullStorage();
}


var saveSearch = function (newCity) {
    var cityExists = false;
    for (var i = 0; i < localStorage.length; i++) {
        if (localStorage["cities" + i] === newCity) {
            cityExists = true;
            break;
        }
    }
    // save to local 
    if (cityExists === false) {
        localStorage.setItem('cities' + localStorage.length, newCity)
    }
}

function getForecast(city) {
    var forecast = "api.openweathermap.org/data/2.5/forecast?" + city + "&APPID=" + apiKey + "&units=metric"
    fetch(forecast)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data)
        })
    $("#forecast").html("<h2 class=\"mt-3\">5 Day Forecast:</h2>").append("<div class=\row\></div>")

  
}


// display query history
function pullStorage() {
    $('#list-group').empty();
            // display previous searches
        for (var i = 0; i < localStorage.length; i++) {
            var city = localStorage.getItem("cities" + i);
            var cityEl;
            // Set to lastCity if current not set
            if (currentCity === "") {
                currentCity = lastCity;
            }
            if (city === currentCity) {
                cityEl = `<button type="button" class="list-group-item list-group-item-action active">${city}</button></li>`;
            } else {
                cityEl = `<button type="button" class="list-group-item list-group-item-action">${city}</button></li>`;
            }
            // Append city to page
            $('#list-group').prepend(cityEl);
        }
        if (localStorage.length > 0) {
            $('#clear-storage').html($('<a id="clear-storage" href="#">clear</a>'));
        } else {
            $('#clear-storage').html('');
        }
    }

pullStorage();