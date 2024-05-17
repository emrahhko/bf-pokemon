import { createAbilities } from './createAbilities.js';

export const updatePokemonDom = (pokemonDom, pokemonData) => {
    pokemonDom.querySelector('#name').innerText = pokemonData.name;
    pokemonDom.querySelector('#image').src = pokemonData.sprites.front_default;
    pokemonDom.querySelector('#image').alt = pokemonData.name;
    const oldList = pokemonDom.querySelector('#ability-list');
    const newList = createAbilities(pokemonData.abilities);
    oldList.replaceWith(newList);
};
