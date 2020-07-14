
const requestURL = 'data/rentalTypes.json';

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject); // temporary checking for valid response and data parsing


        const rental = jsonObject['rental'];

        for (let i = 0; i < rental.length; i++) {
            let item = document.createElement('section');
            // if (towns[i].name == "Fish Haven"||towns[i].name =="Preston"||towns[i].name =="Soda Springs") {
                
                let name = document.createElement('div.rental');
                let h1 = document.createElement('h1');
                // let type = document.createElement('h3');
                // let engine = document.createElement('h2');
                // let people = document.createElement('h2');
                // let image = document.createElement('img');

                h1.textContent = rental[i].name;
                console.log("name " + towns[i].name);
                // motto.textContent = towns[i].motto;
                // year.textContent = "Year Founded " +towns[i].yearFounded + "\n";
                // population.textContent = "Population " +towns[i].currentPopulation + "\n";
                // rain.textContent = "Annual Rain Fall " +towns[i].averageRainfall + "\n";
                // image.setAttribute('src', "images/"+towns[i].photo);
                // image.setAttribute('alt',  towns[i].name + ' main image');

                item.appendChild(name);  
                item.appendChild(h1);
                // card.appendChild(motto);
                // card.appendChild(year);
                // card.appendChild(population);
                // card.appendChild(rain);
                // card.appendChild(image);
            // }
            document.querySelector('div.items').appendChild(item);
        }
    });