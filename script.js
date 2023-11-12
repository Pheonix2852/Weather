const apikey = "5b93f95d406e996ebf5294ff1a73b138";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city){

    const response = await fetch(apiUrl + city + `&appid=${apikey}`);        //modified api url according to response

    if(response.status==404){                                                //for entering invalid city name
                                          
        document.querySelector(".error").style.display= "block";             //if city name is not ok,error will be shown
        document.querySelector(".weather").style.display= "none";            //if city name is not ok,weather info will not be shown
    }

    else{
        var data = await response.json();


        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + "km/hr";

        if(data.weather[0].main == "Clouds"){
            weatherIcon.src = "images/clouds.png";
        }

        else if(data.weather[0].main == "Clear"){
            weatherIcon.src = "images/clear.png";
        }

        else if(data.weather[0].main == "Rain"){
            weatherIcon.src = "images/rain.png";
        }

        else if(data.weather[0].main == "Drizzle"){
            weatherIcon.src = "images/drizzle.png";
        }

        else if(data.weather[0].main == "Mist"){
            weatherIcon.src = "images/mist.png";
        }

        document.querySelector(".weather").style.display = 'block';         //if city name is ok,weather info will be shown
        document.querySelector(".error").style.display= "none";             //if city name is ok,weather info will  not be shown
        }     
                
}

searchBtn.addEventListener("click", ()=>{                                  //feeding the input value to function for adding into API url
    checkWeather(searchBox.value);
})
checkWeather();
