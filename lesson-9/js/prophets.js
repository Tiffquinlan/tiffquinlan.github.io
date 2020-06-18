const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject); // temporary checking for valid response and data parsing


        const prophets = jsonObject['prophets'];

        for (let i = 0; i < prophets.length; i++) {
            let card = document.createElement('section');
            let h2 = document.createElement('h2');
            let date = document.createElement('date');
            let place = document.createElement('place');
            let image = document.createElement('image');
            

            h2.textContent = prophets[i].name + ' ' + prophets[i].lastname;
            date.textContent = "date of birth" + prophets[i].birthdate + "\n";
            place.textContent = "place of birth " + prophets[i].birthplace + "\n";
            image.textContent =  prophets[i].name + ' ' + prophets[i].lastname +' '+ prophets[i].order;


            card.appendChild(h2);
            card.appendChild(date);
            card.appendChild(place);
            card.appendChild(image);

            document.querySelector('div.cards').appendChild(card);
        }
    });