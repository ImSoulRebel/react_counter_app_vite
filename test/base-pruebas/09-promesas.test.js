import { getHeroeByIdAsync } from "../../src/base-pruebas/09-promesas";

/* eslint-disable no-undef */
describe('Test on 09-promesas', () => {
    // [done] cuando es asincrono
    test('debe retornar un héroe', (done) => {
        const id = 1;
        getHeroeByIdAsync(id).then(
            hero => {
                expect(hero).toEqual({
                    id: 1,
                    name: 'Batman',
                    owner: 'DC'
                });
                done();
            }
        );
    });

    test('debe retornar error si un héroe no existe', (done) => {
        const id = 100;
        getHeroeByIdAsync(id)
            .then(hero => {
                expect(hero).toBeFalsy();
                done();
            })
            .catch(
                error => {
                    console.log(error)
                    done();
                }
            );
    });
});