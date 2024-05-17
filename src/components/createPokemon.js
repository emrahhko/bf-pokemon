import { createAbilities } from './createAbilities.js';

export const createPokemon = (pokemonData) => {
    const container = document.createElement('div');
    container.className = 'pokemon-container';
    container.id = 'container';
    const name = document.createElement('h2');
    name.id = 'name';
    name.innerText = pokemonData.name;
    const img = document.createElement('img');
    img.id = 'image';
    img.src = pokemonData.sprites.front_default;
    img.alt = pokemonData.name;
    const abilities = document.createElement('h3');
    abilities.innerText = 'abilities';
    const abilitiesList = createAbilities(pokemonData.abilities);
    container.append(name, img, abilities, abilitiesList);
    return container;
};
