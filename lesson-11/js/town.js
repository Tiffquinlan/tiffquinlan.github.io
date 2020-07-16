const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject); // temporary checking for valid response and data parsing


        const towns = jsonObject['towns'];

        for (let i = 0; i < towns.length; i++) {
            let card = document.createElement('section');
            if (towns[i].name == "Fish Haven"||towns[i].name =="Preston"||towns[i].name =="Soda Springs") {
                
                let card = document.createElement('town');
                let h1 = document.createElement('h1');
                let motto = document.createElement('h3');
                let year = document.createElement('h2');
                let population = document.createElement('h2');
                let rain = document.createElement('h2');
                let image = document.createElement('img');

                h1.textContent = towns[i].name;
                console.log("name " + towns[i].name);
                motto.textContent = towns[i].motto;
                year.textContent = "Year Founded " +towns[i].yearFounded + "\n";
                population.textContent = "Population " +towns[i].currentPopulation + "\n";
                rain.textContent = "Annual Rain Fall " +towns[i].averageRainfall + "\n";
                image.setAttribute('src', "images/"+towns[i].photo);
                image.setAttribute('alt',  towns[i].name + ' main image');

                card.appendChild(town);  
                card.appendChild(h1);
                card.appendChild(motto);
                card.appendChild(year);
                card.appendChild(population);
                card.appendChild(rain);
                card.appendChild(image);
            }
            document.querySelector('div.cards').appendChild(card);
        }
    });