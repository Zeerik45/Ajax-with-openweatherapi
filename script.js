$(document).ready(function() {
    $("#form-sub").submit(function(event) {

        $("mytable").hide();

        performSearch(event);

    });
});

function performSearch(event) {
    var request;
    var request1;
    var request2;
    var request3;
    var request4;
    event.preventDefault();


    var city = $("#city").val();


//if city field is empty and you press search it will displays the result of five cities if you dont want it just remove all this except where city have a value
    if (city === "") {

        $("#city-name").text("Searching ...");
        $("#city-temp").text("");

        $("#city-weather").text("");

        $("#city-name1").text("Searching ...");
        $("#city-temp1").text("");

        $("#city-weather1").text("");

        $("#city-name2").text("Searching ...");
        $("#city-temp2").text("");

        $("#city-weather2").text("");

        $("#city-name3").text("Searching ...");
        $("#city-temp3").text("");

        $("#city-weather3").text("");

        $("#city-name4").text("Searching ...");
        $("#city-temp4").text("");

        $("#city-weather4").text("");

        console.log('Empty Condition');
        request = $.ajax({
            url: 'https://api.openweathermap.org/data/2.5/weather',
            type: "GET",
            data: {
                q: 'Islamabad',
                appid: 'bea4dfc9774d66104514ff50ce627675', // put your appid
                units: 'metric'
            }

        });
        // Callback handler for success
        request.done(function(response) {
            formatSearchResults(response);
            console.log("working");
        });

        // Callback handler for failure
        request.fail(function() {
            console.log("error2")
            $("#city-name").text("Please try again!!!!!");
            $("#city-temp").text("");

            $("#city-weather").text("");
        });
        request1 = $.ajax({
            url: 'https://api.openweathermap.org/data/2.5/weather',
            type: "GET",
            data: {
                q: 'Lahore',
                appid: 'bea4dfc9774d66104514ff50ce627675', // put your appid
                units: 'metric'
            }

        });
        // Callback handler for success
        request1.done(function(response) {
            formatSearchResults1(response);
            console.log("working");
        });

        // Callback handler for failure
        request1.fail(function() {
            console.log("error2")
            $("#city-name").text("Please try again!!!!!");
            $("#city-temp").text("");

            $("#city-weather").text("");
        });

        request2 = $.ajax({
            url: 'https://api.openweathermap.org/data/2.5/weather',
            type: "GET",
            data: {
                q: 'Karachi',
                appid: 'bea4dfc9774d66104514ff50ce627675', // put your appid
                units: 'metric'
            }

        });
        // Callback handler for success
        request2.done(function(response) {
            formatSearchResults2(response);
            console.log("working");
        });

        // Callback handler for failure
        request2.fail(function() {
            console.log("error2")
            $("#city-name").text("");
            $("#city-temp").text("");

            $("#city-weather").text("");
        });

        request3 = $.ajax({
            url: 'https://api.openweathermap.org/data/2.5/weather',
            type: "GET",
            data: {
                q: 'Quetta',
                appid: 'bea4dfc9774d66104514ff50ce627675', // put your appid
                units: 'metric'
            }

        });
        // Callback handler for success
        request3.done(function(response) {
            formatSearchResults3(response);
            console.log("working");
        });

        // Callback handler for failure
        request3.fail(function() {
            console.log("error2")
            $("#city-name").text("Please try again!!!!!");
            $("#city-temp").text("");

            $("#city-weather").text("");
        });

        request4 = $.ajax({
            url: 'https://api.openweathermap.org/data/2.5/weather',
            type: "GET",
            data: {
                q: 'Peshawar',
                appid: 'bea4dfc9774d66104514ff50ce627675', // put your appid
                units: 'metric'
            }

        });
        // Callback handler for success
        request4.done(function(response) {
            formatSearchResults4(response);
            console.log("working");
        });

        // Callback handler for failure
        request4.fail(function() {
            console.log("error2")
            $("#city-name").text("Please try again!!!!!");
            $("#city-temp").text("");

            $("#city-weather").text("");
        });







    } else
    if (city != null && city != "") {

        console.log('in else');
        // Send the request
        request = $.ajax({
            url: 'https://api.openweathermap.org/data/2.5/weather',
            type: "GET",
            data: {
                q: city,
                appid: 'bea4dfc9774d66104514ff50ce627675', // put your appid
                units: 'metric'
            }

        });

        // Callback handler for success
        request.done(function(response) {
            formatSearchResults0(response);
            console.log("working");
        });

        // Callback handler for failure
        request.fail(function() {
            console.log("error")
            $("#mytable").hide();
            $("#city-name0").text("Please try again!!!!!");
            $("#city-temp0").text("");

            $("#city-weather0").text("");
        });
    }
}




function formatSearchResults0(jsonObject) {

    var city_name = jsonObject.name;
    city_name = city_name + ", " + jsonObject.sys.country;
    var city_weather = jsonObject.weather[0].main;
    var city_temp = jsonObject.main.temp;

    $("#mytable").hide();

    $("#city-name0").text(city_name);
    $("#city-weather0").text(city_weather);
    $("#city-temp0").text(city_temp + " Celsius");


}

function formatSearchResults(jsonObject) {

    var city_name = jsonObject.name;
    city_name = city_name + ", " + jsonObject.sys.country;
    var city_weather = jsonObject.weather[0].main;
    var city_temp = jsonObject.main.temp;

    $("#mytable").show();


    $("#city-name").text(city_name);
    $("#city-weather").text(city_weather);
    $("#city-temp").text(city_temp + " Celsius");

    $("#city-name0").text("");
    $("#city-weather0").text("");
    $("#city-temp0").text("");

}

function formatSearchResults1(jsonObject) {

    var city_name = jsonObject.name;
    city_name = city_name + ", " + jsonObject.sys.country;
    var city_weather = jsonObject.weather[0].main;
    var city_temp = jsonObject.main.temp;

    $("#mytable").show();

    $("#city-name1").text(city_name);
    $("#city-weather1").text(city_weather);
    $("#city-temp1").text(city_temp + " Celsius");

}

function formatSearchResults2(jsonObject) {

    var city_name = jsonObject.name;
    city_name = city_name + ", " + jsonObject.sys.country;
    var city_weather = jsonObject.weather[0].main;
    var city_temp = jsonObject.main.temp;


    $("#city-name2").text(city_name);
    $("#city-weather2").text(city_weather);
    $("#city-temp2").text(city_temp + " Celsius");

}

function formatSearchResults3(jsonObject) {

    var city_name = jsonObject.name;
    city_name = city_name + ", " + jsonObject.sys.country;
    var city_weather = jsonObject.weather[0].main;
    var city_temp = jsonObject.main.temp;


    $("#city-name3").text(city_name);
    $("#city-weather3").text(city_weather);
    $("#city-temp3").text(city_temp + " Celsius");

}

function formatSearchResults4(jsonObject) {

    var city_name = jsonObject.name;
    city_name = city_name + ", " + jsonObject.sys.country;
    var city_weather = jsonObject.weather[0].main;
    var city_temp = jsonObject.main.temp;

    $("#city-name4").text(city_name);
    $("#city-weather4").text(city_weather);
    $("#city-temp4").text(city_temp + " Celsius");

}
