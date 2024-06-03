const apikey = "711e3e4e049e19bdac3848ad828d7407";
const apiUrl =  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchbox = document.querySelector(".search input")
const searchbtn = document.querySelector(".search button")
async function checkweather(city){
const response = await fetch(apiUrl +  city  +  `&appid=${apikey}`);

if(response.status==404){
    document.querySelector(".temp").innerHTML= "100°c";
    document.querySelector(".city").innerHTML=city;
    document.querySelector(".weather").style.display="block";
    document.querySelector(".weather-icon").src="images/PngItem_2565078.png"
}
else{
var data = await response.json();
console.log(data)

document.querySelector(".city").innerHTML=data.name;
document.querySelector(".temp").innerHTML=Math.round(data.main.temp) + "°c";
document.querySelector(".humidity").innerHTML=data.main.humidity + "%";
document.querySelector(".wind").innerHTML=data.wind.speed + "km/h";

if(data.weather[0].main=="Clouds"){
document.querySelector(".weather-icon").src= "images/clouds.png"
}
else if(data.weather[0].main=="Clear"){
document.querySelector(".weather-icon").src= "images/clear.png"
}
else if(data.weather[0].main=="Rain"){
document.querySelector(".weather-icon").src= "images/rain.png"
}
else if(data.weather[0].main=="Drizzle"){
document.querySelector(".weather-icon").src= "images/drizzle.png"
}
else if(data.weather[0].main=="Mist"){
document.querySelector(".weather-icon").src= "images/mist.png"
}
document.querySelector(".weather").style.display="block";
document.querySelector(".error").style.display="none";

}
}
searchbox.addEventListener("keydown",(event)=>{
    if(event.key==='Enter'){checkweather(searchbox.value)}
    
})



searchbtn.addEventListener("click",()=>{
checkweather(searchbox.value)
})


