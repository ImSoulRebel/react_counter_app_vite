/* eslint-disable no-undef */
import { getImagen } from '../../src/base-pruebas/11-async-await'

describe('test on 11-async-await', () => {
    test('getImagen debe retonrar url de la imagen', async () => {
        const url = await getImagen();
        console.log(url);
        expect(typeof url).toBe('string');
    });
});