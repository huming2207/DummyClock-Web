function loadWeather(){
    $.getJSON("https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22melbourne%2C%20victoria%22)%20and%20u%3D'c'&format=json&diagnostics=true&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=", 
    function(data) {
        // Update weather
        $("#weather-today").text(data.query.results.channel.item.condition.temp + "ºC");
        $("#weather-tomorrow").text(data.query.results.channel.item.forecast["0"].low + "~" + data.query.results.channel.item.forecast["0"].high + "ºC");
        $("#weather-status-today").text(data.query.results.channel.item.condition.text);
        $("#weather-status-tomorrow").text(data.query.results.channel.item.forecast["0"].text);
        document.getElementById("weather-icon-today").className = "wi ";
        document.getElementById("weather-icon-today").className += "wi-yahoo-" + data.query.results.channel.item.condition.code;
        document.getElementById("weather-icon-tomorrow").className = "wi ";
        document.getElementById("weather-icon-tomorrow").className += "wi-yahoo-" + data.query.results.channel.item.forecast["0"].code;
    }); 
}



var weatherTimerToken = setInterval(loadWeather(), 10000);