import { getSaludo } from '../../src/base-pruebas/02-template-string';


describe('Test on 02-template-string', () => {

    test('getSaludo debe retornar "Hola Peter"', () => {
        const name = 'Peter';
        const message = getSaludo(name);

        expect(message).toBe(`Hola ${name}`);

    });
});