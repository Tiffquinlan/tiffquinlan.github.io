const requestURL = 'data/rentals.json';

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
            console.table(jsonObject); // temporary checking for valid response and data parsing

            const rentals = jsonObject['rentals'];

            let item = document.createElement('section');
            for (let i = 0; i < rentals.length; i++) {

                let item = document.createElement('article');
                let info = document.createElement('card');


                let h1 = document.createElement('h1');
                let type = document.createElement('h3');
                let description = document.createElement('h3');
                let people = document.createElement('h3');
                let prices = document.createElement('h3')
                let image = document.createElement('img');


                type.textContent = rentals[i].type;
                h1.textContent = rentals[i].name;
                console.log("name " + rentals[i].name);
                description.textContent = rentals[i].description + "\n";
                people.textContent = "Max Persons " + rentals[i].people + "\n";
                prices.textContent = rentals[i].reservation[0].time + " " + rentals[i].reservation[0].price;
                image.setAttribute('src', "images/" + rentals[i].photo);
                image.setAttribute('alt', rentals[i].name + ' picture');

                // info.appendChild(type);
                info.appendChild(h1);
                // info.appendChild(description);
                // info.appendChild(people);
                info.appendChild(prices);

                item.appendChild(info);
                item.appendChild(image);
                document.querySelector('div.items').appendChild(item);
            }
        }
    );