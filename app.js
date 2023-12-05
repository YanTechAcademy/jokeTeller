const jokeContainer = document.querySelector(".joke");
const btn = document.querySelector(".btn-request");

getJoke();

btn.addEventListener("click", getJoke);

// function getJoke() {
//   const header = {
//     headers: {
//       Accept: "application/json",
//     },
//   };

//   fetch("https://icanhazdadjoke.com", header)
//     .then((res) => res.json())

//     .then((data) => {
//       jokeContainer.innerHTML = data.joke;
//     });

//   console.log("completed");
// }

async function getJoke() {
  const header = {
    headers: {
      Accept: "application/json",
    },
  };

  const res = await fetch("https://icanhazdadjoke.com", header);

  const data = await res.json();
  jokeContainer.innerHTML = data.joke;
}
