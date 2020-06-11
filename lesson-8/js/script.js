

var date = new Date();
var d = new Date();
// document.getElementById("day").innerHTML = d.getDay();
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["January","February","March","April","May","June","July","August","September","October","November","December"
];
// document.getElementById("day").innerHTML = days[d.getDay()];
year = d.getFullYear();
month = months[d.getMonth()];
DayNum = d.getDate();
date= DayNum + " " + month + " " + year;
document.getElementById('date').textContent = date;