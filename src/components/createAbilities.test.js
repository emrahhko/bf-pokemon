/**
 * @jest-environment jsdom
 */

import { createAbilities } from './createAbilities.js';

describe('createAbilities function', () => {
    const abilitiesData = [
        { ability: { name: 'static' } },
        { ability: { name: 'lightning-rod' } },
    ];

    const abilitiesList = createAbilities(abilitiesData);

    test('abilitiesList should be a ul with id "ability-list"', () => {
        expect(abilitiesList.nodeName).toEqual('UL');
        expect(abilitiesList.id).toEqual('ability-list');
    });

    test('abilitiesList should have correct number of children', () => {
        expect(abilitiesList.childElementCount).toEqual(abilitiesData.length);
    });

    test('each list item should have correct ability name', () => {
        const abilityItems = Array.from(abilitiesList.children);
        abilityItems.forEach((item, index) => {
            expect(item.nodeName).toEqual('LI');
            expect(item.innerText).toEqual(abilitiesData[index].ability.name);
        });
    });
});
