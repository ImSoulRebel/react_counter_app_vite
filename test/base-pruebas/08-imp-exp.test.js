/* eslint-disable no-undef */
import { getHeroeById, getHeroesByOwner } from '../../src/base-pruebas/08-imp-exp'

describe('Test on 08-imp-exp', () => {
    test('getHeroebyId debe retornar un héroe por ID', () => {
        const id = 1;
        const hero = getHeroeById(id);
        expect(hero).toEqual({
            id: 1,
            name: 'Batman',
            owner: 'DC'
        },)
    });

    test('getHeroebyId debe retornar undefine si no existe', () => {
        const id = 100;
        const hero = getHeroeById(id);
        // null, undefined or false
        expect(hero).toBeFalsy();
    });

    test('getHeroesByOwner debe retornar heroes de DC', () => {
        const dcHeroes = [{
            id: 1,
            name: 'Batman',
            owner: 'DC'
        },
        {
            id: 3,
            name: 'Superman',
            owner: 'DC'
        },
        {
            id: 4,
            name: 'Flash',
            owner: 'DC'
        },];
        const getDcHeroes = getHeroesByOwner('DC');
        expect(dcHeroes.length).toBe(getDcHeroes.length);
        expect(dcHeroes).toEqual(getDcHeroes);
    });
});