import { dom } from '../dom.js';
import { getPokemonHandler } from '../handlers/getPokemonHandler.js';

export const clickEvent = () => {
    dom.btn.addEventListener('click', getPokemonHandler);
};
