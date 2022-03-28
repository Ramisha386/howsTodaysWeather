let weather={
    apiKey:"75214137037e18c90879f2c360d8f2b1",
    city:"Denver",
    fetchWeather: function(city){
        fetch("https://api.openweathermap.org/data/2.5/weather?q="
        + city 
        + "&units=metric&appid="
        + this.apiKey
    )
        .then((response)=>response.json())
        .then((data)=>this.displayWeather(data));
    },
    displayWeather: function(data) {
        const {name}=data;
        document.body.style.backgroundImage="url('https://source.unsplash.com/2000x1200/?"+name+"')"
        const {icon, description}=data.weather[0];
        const {temp, humidity}=data.main;
        const {speed}=data.wind;
        // console.log(name);
        // console.log(icon,description,temp,humidity,speed);
        document.querySelector(".city").innerText="Weather in "+name;
        document.querySelector(".icon").src="https://openweathermap.org/img/wn/" + icon + ".png";
        document.querySelector(".description").innerText=description;
        document.querySelector(".temp").innerText=temp+"°";
        document.querySelector(".humidity").innerText="Humidity: "+humidity+" %";
        document.querySelector(".wind").innerText="Wind Speed: "+speed+" km/hr";
        document.querySelector(".weather").classList.remove("loading");

    },
};
document.querySelector(".search button").addEventListener("click",function(){
    weather.fetchWeather(document.querySelector(".search-bar").value);
});

document.querySelector(".search-bar").addEventListener("keyup",function(event){
    if(event.key=="Enter")
    {weather.fetchWeather(document.querySelector(".search-bar").value);}
});

 weather.fetchWeather("Dhaka")
