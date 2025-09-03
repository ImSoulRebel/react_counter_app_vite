import { getUser, getUsuarioActivo } from '../../src/base-pruebas/05-funciones';

describe('test on 05-funciones.js', () => {

    test('getUser debe retornar un objeto', () => {
        const testUser = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        };
        const user = getUser();
        expect(testUser).toEqual(user);
    });

    test('getUsusarioActivo debe retornar un objeto', () => {
        const name = 'Peter';
        const testUser = {
            uid: 'ABC567',
            username: name
        };
        const usuarioActivo = getUsuarioActivo(name);
        expect(testUser).toEqual(usuarioActivo);
    });

});