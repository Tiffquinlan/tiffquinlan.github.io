// Bear Lake County which is ID =  5585000
// API key : 0e4d31ccfabb22eece86dc1453da7105


const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5585000&appid=0e4d31ccfabb22eece86dc1453da7105&units=imperial";
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    document.getElementById('current-weather').innerHTML = jsObject.weather[0].main;
    document.getElementById('high-temp').innerHTML = jsObject.main.temp_max;
    document.getElementById('humidity').innerHTML = jsObject.main.humidity;
    document.getElementById('wind-speed').innerHTML = jsObject.wind.speed;


    let windchill = 35.74 + (0.6215 * jsObject.main.temp_min) - (35.75 * Math.pow(jsObject.wind.speed, 0.16)) + (0.4275 * jsObject.main.temp_min) * Math.pow(jsObject.wind.speed, 0.16);
    // console.log(windchill);
    windchill = Math.round(windchill);
    if (jsObject.wind.speed > 3 && jsObject.main.temp_min <= 50) {
      document.getElementById('wind-chill').textContent = windchill + "\xB0F";
    } else {
      document.getElementById('wind-chill').textContent = "none"
    }
  });

let t = new Date();
const dayshort = ["Sun", "Mon", "Tues", "Wed", "Thru", "Fri", "Sat"];
const todayDayNumber = t.getDay();
let forecastDayNumber = todayDayNumber;
// console.log(forecastDayNumber);


const forcastURI = "https://api.openweathermap.org/data/2.5/forecast?id=5585000&appid=0e4d31ccfabb22eece86dc1453da7105&units=imperial";

fetch(forcastURI)
  .then((response) => response.json()).then((forecast) => {
    console.log(forecast);
    let mylist = forecast.list;
    let cards = mylist.filter(t => t.dt_txt.includes('18:00:00'))
      .map(t => {
        forecastDayNumber += 1;
        if (forecastDayNumber === 7) {
          forecastDayNumber = 0;
        }
        let iconcode = t.weather[0].icon;
        let iconPath = "//openweathermap.org/img/w/" + iconcode + ".png";
        console.log(iconPath);
        let iconAlt = t.weather[0].description;

        return `<div class="card">
            <h2 class=title>${dayshort[forecastDayNumber]}</h2>
            <h3>${t.main.temp}\xB0F</h3>
            <img src="${iconPath}" alt="${iconAlt}">

		</div>`
      }).join('')

    document.getElementById('weatherforecast').insertAdjacentHTML('beforeend', cards);

  });

const eventURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(eventURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject); // temporary checking for valid response and data parsing
    const towns = jsonObject['towns'];
    for (let i = 0; i < towns.length; i++) {
      let CurEvents = document.createElement('section');
      if (towns[i].name == "Fish Haven") {
        for (var j = 0; j < towns[i].events.length; j++) {
          console.log("event " + towns[i].events[j]);
          let h3 = document.createElement('h3');
          h3.textContent = towns[i].events[j];
          CurEvents.appendChild(h3);
        }
      }
      document.querySelector('div.events').appendChild(CurEvents);
    }
  });