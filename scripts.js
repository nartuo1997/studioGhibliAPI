const app = document.getElementById('root');

// create <img src="/image/logo.png">
const logo = document.createElement('img');
logo.src = "/image/logo.png";
// create <div clas="container"> ... </div>
const container = document.createElement('div');
container.setAttribute('class', 'container');

app.appendChild(logo);
app.appendChild(container);


/* Get JSON from API */
var request = new XMLHttpRequest();
request.open('GET', 'https://ghibliapi.herokuapp.com/films', true);   // use GET method to retrieve JSON from API

// Open a new connection, using GET request on URL endpoint
request.onload = function() {
    // convert JSON into javascript objects
    var data = JSON.parse(this.response);
    
if(request.status == 200) {     // HTTP request OK
    data.forEach(movies => {
        // create <div> element
        const card = document.createElement('div');

        // set <div class="card">
        card.setAttribute('class', 'card');

        // create h1 tag
        const h1 = document.createElement('h1')
        h1.textContent = movies.title;     // get data from JSON

        // create p tag
        const p = document.createElement('p')
        movies.description = movies.description.substring(0,300);    // limit to 300 chars
        p.textContent = `${movies.description}...`;


         // Append the cards to the container element
        container.appendChild(card)
        // Each card will contain an h1 and a p
        card.appendChild(h1);
        card.appendChild(p);



        
    });
  
}
else {     
        const errorMessage = document.createElement('marquee');
        errorMessage.textContent = 'Not working bitch!!';
        app.appendChild(errorMessage);
    }
}





request.send();
