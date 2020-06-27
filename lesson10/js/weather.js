// Preston ID, town ID: 5604473
// API key : 0e4d31ccfabb22eece86dc1453da7105
//api.openweathermap.org/data/2.5/weather?id=5604473&appid=0e4d31ccfabb22eece86dc1453da7105

const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=0e4d31ccfabb22eece86dc1453da7105&units=imperial";
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    document.getElementById('current-weather').innerHTML = jsObject.weather[0].main;
    document.getElementById('high-temp').innerHTML = jsObject.main.temp_max;
    document.getElementById('humidity').innerHTML = jsObject.main.humidity;
    document.getElementById('wind-speed').innerHTML = jsObject.wind.speed;


    let windchill = 35.74 +(0.6215 * jsObject.main.temp_min) - (35.75 * Math.pow(jsObject.wind.speed,0.16)) + (0.4275 * jsObject.main.temp_min)*Math.pow(jsObject.wind.speed, 0.16);
    // console.log(windchill);
    windchill = Math.round(windchill);
    if (jsObject.wind.speed>3 && jsObject.main.temp_min<=50){
        document.getElementById('wind-chill').textContent = windchill+"\xB0F";
    }else{
        document.getElementById('wind-chill').textContent = "none"
    }

});

const forcastURI = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&appid=0e4d31ccfabb22eece86dc1453da7105&units=imperial";
fetch(forcastURI)  
.then((response) => response.json())  
.then((forecast) => { console.log(forecast)});

// const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png';  // note the concatenation
// const desc = jsObject.weather[0].description;  // note how we reference the weather array
// document.getElementById('imagesrc').textContent = imagesrc;  // informational specification only
// document.getElementById('icon').setAttribute('src', imagesrc);  // focus on the setAttribute() method
// document.getElementById('icon').setAttribute('alt', desc);
