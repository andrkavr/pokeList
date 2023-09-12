const container = document.getElementById("board");

const fetchOriginalPokemon = async () => {
  await fetch(`https://pokeapi.co/api/v2/pokemon?limit=151`)
    .then((res) => {
      return res.json();
    })
    .then((json) => {
      json.results.forEach((pokemon) => {
        fetch(pokemon.url)
          .then((response) => response.json())
          .then((data) => {
            container.innerHTML += `
          <div class="card">
          <img src=${data.sprites.front_default} alt=${data.forms[0].name}>
            <p id="poke-name">${data.id} ${data.forms[0].name}</p>
          </div>
        `;
          });
      });
    });
};

fetchOriginalPokemon();
