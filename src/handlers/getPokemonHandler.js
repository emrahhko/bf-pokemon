import { dom } from '../dom.js';
import { getPokemon } from '../../apis/getPokemon.js';
import { createPokemon } from '../components/createPokemon.js';
import { updatePokemonDom } from '../components/updatePokemonDom.js';
import { data } from '../data.js';

export const getPokemonHandler = async () => {
    const value = Number(dom.input.value);
    if (data.oldId === value) {
        return;
    }
    const isValidId = value > 0 && value < 1280;
    if (!isValidId) {
        dom.error.className = 'error';
        dom.error.innerText = 'please enter a valid id';
        dom.root.append(dom.error);
        return;
    }
    const errorExist = dom.root.querySelector('.error');
    if (errorExist) {
        dom.error.remove();
    }
    const pokemonData = await getPokemon(value);
    const pokemonDomExist = dom.root.querySelector('#container');
    if (pokemonDomExist) {
        updatePokemonDom(pokemonDomExist, pokemonData);
    } else {
        const pokemonDom = createPokemon(pokemonData);
        dom.root.append(pokemonDom);
    }
    dom.input.value = '';
    data.oldId = value;
};
