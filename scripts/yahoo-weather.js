function loadWeather() {
    $.getJSON("https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22melbourne%2C%20victoria%22)%20and%20u%3D'c'&format=json&diagnostics=true&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=",
        function (data) {
            // Update weather
            var result_item = data.query.results.channel.item;

            $("#weather-today").text(result_item.condition.temp + "ºC");
            $("#weather-status-today").text(result_item.condition.text);
            document.getElementById("weather-icon-today").className = "wi ";
            document.getElementById("weather-icon-today").className += "wi-yahoo-" + result_item.condition.code;

            var forecast_index;
            for (forecast_index = 1; forecast_index <= 3; forecast_index++) {
                if (document.getElementById("weather-status-forecast-" + forecast_index.toString()) != null) {
                    $("#weather-date-forecast-" + forecast_index.toString()).text(result_item.forecast[forecast_index.toString()].date);
                    $("#weather-forecast-" + forecast_index.toString()).text(result_item.forecast[forecast_index.toString()].low + "~" + result_item.forecast[forecast_index.toString()].high + "ºC");
                    $("#weather-status-forecast-" + forecast_index.toString()).text(result_item.forecast[forecast_index.toString()].text);
                    document.getElementById("weather-icon-forecast-" + forecast_index.toString()).className = "wi ";
                    document.getElementById("weather-icon-forecast-" + forecast_index.toString()).className += "wi-yahoo-" + result_item.forecast[forecast_index.toString()].code;
                }
                else
                {
                    console.log("[Warning] No weather-status-forcast-" + forecast_index.toString() + " element found in the HTML.");
                }
            }

        });
}



var weatherTimerToken = setInterval("loadWeather()", 10000);