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
                let price1 = document.createElement('p')
                let price2 = document.createElement('p')
                let price3 = document.createElement('p')
                let price4 = document.createElement('p')
                let image = document.createElement('img');


                type.textContent = rentals[i].type;
                h1.textContent = rentals[i].name;
                console.log("name " + rentals[i].name);
                description.textContent = rentals[i].description + "\n";
                people.textContent = "Max Persons " + rentals[i].people + "\n";

                price1.textContent = "Prices starting at " + rentals[i].reservation[0].price +" / "+ rentals[i].reservation[0].time  ;

                // price1.textContent = rentals[i].reservation[0].time + " " + rentals[i].reservation[0].price;
                // price2.textContent = rentals[i].reservation[1].time + " " + rentals[i].reservation[1].price;
                // price3.textContent = rentals[i].walkin[0].time + " " + rentals[i].walkin[0].price;
                // price4.textContent = rentals[i].walkin[1].time + " " + rentals[i].walkin[1].price;
                
                image.setAttribute('src', "images/" + rentals[i].photo);
                image.setAttribute('alt', rentals[i].name + ' picture');

                // info.appendChild(type);
                info.appendChild(h1);
                info.appendChild(description);
                info.appendChild(people);
                info.appendChild(price1);
                // info.appendChild(price2);
                // info.appendChild(price3);
                // info.appendChild(price4);

                item.appendChild(info);
                item.appendChild(image);
                document.querySelector('div.items').appendChild(item);
            }
        }
    );