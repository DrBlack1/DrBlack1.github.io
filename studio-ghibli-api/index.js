const app = document.getElementById("root");

const logo = document.createElement("img");
logo.src = "https://taniarascia.github.io/sandbox/ghibli/logo.png";

const container = document.createElement("main");
container.setAttribute("class", "container");

app.appendChild(logo);
app.appendChild(container);

let request = new XMLHttpRequest();

request.open("GET", "https://ghibliapi.herokuapp.com/films", true);

request.onload = function() {
  let data = JSON.parse(this.response);
  if (request.status >= 200 && request.status <= 400) {
    data.forEach(movie => {
      const card = document.createElement("div");
      card.setAttribute("class", "card");

      const h1 = document.createElement("h1");
      h1.textContent = movie.title;

      // Create a p and set the text content to the film's description
      const p = document.createElement("p");
      p.textContent = `${movie.description}`; // End with an ellipses

      // Append the cards to the container element
      container.appendChild(card);

      // Each card will contain an h1 and a p
      card.appendChild(h1);
      card.appendChild(p);
    });
  } else {
    const errorMessage = document.createElement("div");
    errorMessage.textContent = `Gah, it's not working!`;
    app.appendChild(errorMessage);
  }
};

request.send();
