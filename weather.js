function parser(data) {
    var icon = "wi wi-forecast-io-" + data.currently.icon,
        temp = Math.round(data.currently.temperature),
        tempF = temp,
        tempC = Math.round((data.currently.temperature - 32) * (5 / 9)),
        tog = true;

    $("#icon").addClass(icon);
    $("#temp").text(temp + "\u00b0");
    $("#convert").removeClass('hidden');
    $("#convert").on("click", function () {
        if (tog === true) {
            $("#temp").html(tempC);
            $("#convert").text("C");
            tog = false;
        } else {
            $("#temp").html(tempF);
            $("#convert").text("F");
            tog = true;
        }
    });
}
//if browser can retrieve geolocation
if (navigator.geolocation) {
    //get and pass location
    navigator.geolocation.getCurrentPosition(function (position) {
        var lat = position.coords.latitude,
            lon = position.coords.longitude;
        //display coordinates
        $("#coordinates").html("latitude: " + position.coords.latitude + "<br>longitude: " + position.coords.longitude);
        //parse URL
        var apiKey = "f06e3fba8a02441de7852f791d13dd9b";
        var url = "https://crossorigin.me/https://api.forecast.io/forecast/" + apiKey + "/" + lat + "," + lon;
        //get weather, temp 
        $.getJSON(url, parser);
    }); // x geolocate
}; // x if

$(document).ready(function () {

}); // x document
