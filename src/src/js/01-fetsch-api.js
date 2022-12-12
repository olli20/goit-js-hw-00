const refs = {
    pokemonCard: document.querySelector('.js-pokemon-card'),
    searchForm: document.querySelector('.js-search-form'),
};

const pokemonTemplate = ({ name, imageSrc, weight, height }) =>
    `<div class="card">
        <div class="card-img-top">
            <img src="${imageSrc}" alt="${name}">
        </div>
        <div class="card-body">
            <h2 class="card-title">Name: ${name}</h2>
            <p class="card-text">Weight: ${weight}</p>
            <p class="card-text">Height: ${height}</p>
        </div>
    </div>`;

const renderPockemonCard = (pokemon) => {
    const dataForTemplate = {
            name: pokemon.name,
            imageSrc: pokemon.sprites.front_default,
            weight: pokemon.weight,
            height: pokemon.height,
        };
    refs.pokemonCard.innerHTML = pokemonTemplate(dataForTemplate);
};

const fetchPokemonById = (id) => {
    return fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then(response => response.json());
};

const onFetchError = (error) => {
    alert('We have not found your Pokemon!');
};


const handleSearch = (event) => {
    event.preventDefault();
    const searchQuery = event.currentTarget.elements.query.value;
    fetchPokemonById(searchQuery)
        .then(renderPockemonCard)
        .catch(onFetchError)
        .finally(() => {
            refs.searchForm.reset();
        });
};

refs.searchForm.addEventListener('submit', handleSearch);