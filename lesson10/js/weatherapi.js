// Preston ID, town ID: 5604473
// API key : 0e4d31ccfabb22eece86dc1453da7105
//api.openweathermap.org/data/2.5/weather?id=5604473&appid=0e4d31ccfabb22eece86dc1453da7105

const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=0e4d31ccfabb22eece86dc1453da7105";
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    let K = jsObject.main.temp;
    // let F = (K−273.15)*9/5 + 32;
    document.getElementById('current-temp').textContent = K;
  });


//formula from K-> F: (K − 273.15) × 9/5 + 32


// const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png';  // note the concatenation
// const desc = jsObject.weather[0].description;  // note how we reference the weather array
// document.getElementById('imagesrc').textContent = imagesrc;  // informational specification only
// document.getElementById('icon').setAttribute('src', imagesrc);  // focus on the setAttribute() method
// document.getElementById('icon').setAttribute('alt', desc);