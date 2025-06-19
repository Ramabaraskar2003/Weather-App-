 const inputBox=document.querySelector(".input-box");
 const searchBtn = document.getElementById("searchBtn");
 const weatherImage=document.querySelector(".weather-image");
 const temperature = document.querySelector(".temperature");
 const description = document.querySelector(".description");
 const humidity = document.getElementById("humidity");
 const wind_speed=document.getElementById("wind-speed");
 const locationNotfound= document.querySelector(".location-not-found");
 const weatherBody=document.querySelector(".weather-body");
 
 async function checkWeather(city){
    const api_key="75083f502ffda2efddd449e62baf81ca";
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${"75083f502ffda2efddd449e62baf81ca"}`;
    
    const response = await fetch(`${url}`);
    const weatherData = await response.json();

    if(weatherData.cod==='404'){
        locationNotfound.style.display="flex";
        weatherBody.style.display="none";
        console.log("error");
        return;
    }
    locationNotfound.style.display="none"; 
    weatherBody.style.display="flex";
    temperature.innerHTML=`${Math.round (weatherData.main.temp-273.15)}°C`;
    description.innerHTML = `${weatherData.weather[0].description}`;

    humidity.innerHTML=`${weatherData.main.humidity}%`;
    wind_speed.innerHTML=`${weatherData.wind.speed}Km/H`;

     const condition= weatherData.weather[0].main.toLowerCase();

    console.log("weather",condition);

    if(condition.includes("cloud")){
        weatherImage.src="images/cloud.png";
    }else if(condition.includes("clear")){
        weatherImage.src="images/clear.png";
    }else if(condition.includes("rain")){
        weatherImage.src="images/rain.png";
    }else if(condition.includes("snow")){
     weatherImage.src="images/snow.png";
    }else if(condition.includes("mist")){
        weatherImage.src="images/mist.png";
 }else{
    weatherImage.src="images/default.png";
 }
}
 searchBtn.addEventListener('click',()=>{
    checkWeather(inputBox.value);
 });
