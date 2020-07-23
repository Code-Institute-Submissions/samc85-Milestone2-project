$.getJSON("https://api.openweathermap.org/data/2.5/weather?q=Windermere,uk&units=metric&APPID=5f8d3dba7a0c645864d0ce3eceb76b6a", function(data) {
        console.log(data);

        let icon = "https://openweathermap.org/img/wn/" + data.weather[0].icon + ".png";

        let temp = Math.floor(data.main.temp);
        let weather = data.weather[0].main;
        let temp_max = Math.floor(data.main.temp_max);
        let temp_min = Math.floor(data.main.temp_min);

$(".icon").attr("src", icon);  
$(".weather").append(weather);
$(".temperature").append(temp);
$(".temp_max").append(temp_max);
$(".temp_min").append(temp_min);
    }
);