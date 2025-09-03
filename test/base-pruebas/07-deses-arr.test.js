import { retornaArreglo } from "../../src/base-pruebas/07-deses-arr";

/* eslint-disable no-undef */
describe('test on 07-deses-arr', () => {
    test('debe retornar un String y un number', () => {
        const [letters, numbers] = retornaArreglo();
        expect(letters).toBe('ABC');
        expect(numbers).toBe(123);

        expect(typeof letters).toBe('string');
        expect(letters).toEqual(expect.any(String));
    });
});