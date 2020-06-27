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
.then((response) => response.json()).then((forecast) => {
    console.log(forecast); 
    
	let mylist = forecast.list;
	
	let cards = mylist.filter(t=>t.dt_txt.includes('18:00:00'))
	.map(t=>{ 
		return `<div class="card">
			<h1>${t.main.temp}\xB0F</h1>
		</div>`
	}).join('')
	//console.log(forecast.dt_txt.includes('18:00:00'));
	document.getElementById('weatherforecast').insertAdjacentHTML('beforeend',cards);
	
// 	document.getElementById('weatherforecast').appendChild(cards);
	
// 	for (i=0; i<mylist.length; i++) {
//           var time = mylist[i].dt_txt;
//           if(time.includes('18:00:00')) {
             
//               forecastDayNumber += 1;
//               if (forecastDayNumber===7){
//                 forecastDayNumber=0;
//               }
      
//             let theDayName = document.createElement("span");
//             theDayName.textContent = weekday[forecastDayNumber];
    
//             let iconcode = weatherInfo.list[i].weather[0].icon;
//             let iconPath = "//openweathermap.org/img/w/" + iconcode + ".png";
//             console.log(iconPath);
//             let iconAlt = weatherInfo.list[i].weather[0].description;
//             let theIcon = document.createElement("img");
//             theIcon.src = iconPath;
//             theIcon.alt = iconAlt;
 
//             let theTemp = document.createElement("p");
//             theTemp.textContent = weatherInfo.list[i].main.temp + "\xb0";
            
          
//           let theDay = document.createElement("div");
//           theDay.appendChild(theDayName);
//           theDay.appendChild(theIcon);
//           theDay.appendChild(theTemp);
    
//          document.getElementById('weatherforecast').appendChild(theDay);
          
    
//          }// end if
//         }// end for
    
	
	
	
});

        //   let theDay = document.createElement("div");
        //   theDay.appendChild(theDayName);
        //   theDay.appendChild(theIcon);
        //   theDay.appendChild(theTemp);
    
        //  document.getElementById('weatherforecast').appendChild(theDay);

// const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png';  // note the concatenation
// const desc = jsObject.weather[0].description;  // note how we reference the weather array
// document.getElementById('imagesrc').textContent = imagesrc;  // informational specification only
// document.getElementById('icon').setAttribute('src', imagesrc);  // focus on the setAttribute() method
// document.getElementById('icon').setAttribute('alt', desc);
