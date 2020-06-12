    const hambutton = document.querySelector('.ham');
    const mainnav = document.querySelector('.navigation')
   

    hambutton.addEventListener('click', () => {
        mainnav.classList.toggle('responsive')
    }, false);

    var date = new Date();
    var d = new Date();
    // document.getElementById("day").innerHTML = d.getDay();
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = ["January","February","March","April","May","June","July","August","September","October","November","December"
    ];
    document.getElementById("day").innerHTML = days[d.getDay()];
    year = d.getFullYear();
    month = months[d.getMonth()];
    DayNum = d.getDate();
    date= DayNum + " " + month + " " + year;
    document.getElementById('date').textContent = date;

    const element = document.getElementById("banner");
    if (days[d.getDay()]=="Friday"){
        element.classList.add("showme");
    } else {
        element.classList.add("hideme");
    }

    function myFunction(x) {
        x.classList.toggle("change");
    }


    const ltempNumber = parseFloat(document.getElementById('ltemp').textContent);
    const windNumber = parseFloat(document.getElementById('wind').textContent);
    // console.log(windNumber);
    let windchill = 35.74 +(0.6215 * ltempNumber) - (35.75 * Math.pow(windNumber,0.16)) + (0.4275 * ltempNumber)*Math.pow(windNumber, 0.16);
    // console.log(windchill);
    windchill = Math.round(windchill);
    if (windNumber>3 && ltempNumber<=50){
        document.getElementById('chill').textContent = "Wind Chill " +windchill+"\xB0F";
    }else{
        document.getElementById('chill').textContent = "No wind chill today"
    }

    function adjustRating(rating) {
        document.getElementById("ratingvalue").innerHTML = rating;
    }