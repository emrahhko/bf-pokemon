/**
 * @jest-environment jsdom
 */

import { createPokemon } from './createPokemon.js';
import { createAbilities } from './createAbilities.js';

jest.mock('./createAbilities.js');

describe('createPokemon function', () => {
    const pokemonData = {
        name: 'Pikachu',
        sprites: {
            front_default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png',
        },
        abilities: [
            { ability: { name: 'static' } },
            { ability: { name: 'lightning-rod' } },
        ],
    };

    const abilitiesListMock = document.createElement('ul');
    abilitiesListMock.innerHTML = '<li>static</li><li>lightning-rod</li>';
    createAbilities.mockReturnValue(abilitiesListMock);

    const container = createPokemon(pokemonData);

    test('container should be a div with class "pokemon-container" and id "container"', () => {
        expect(container.nodeName).toEqual('DIV');
        expect(container.className).toEqual('pokemon-container');
        expect(container.id).toEqual('container');
    });

    test('container should have correct child elements', () => {
        expect(container.childElementCount).toEqual(4);
    });

    test('name should be correct', () => {
        const name = container.querySelector('#name');
        expect(name.nodeName).toEqual('H2');
        expect(name.innerText).toEqual('Pikachu');
    });

    test('image should have correct src and alt attributes', () => {
        const img = container.querySelector('#image');
        expect(img.nodeName).toEqual('IMG');
        expect(img.src).toEqual(pokemonData.sprites.front_default);
        expect(img.alt).toEqual('Pikachu');
    });

    test('abilities header should be correct', () => {
        const abilities = container.querySelector('h3');
        expect(abilities.nodeName).toEqual('H3');
        expect(abilities.innerText).toEqual('abilities');
    });
});
