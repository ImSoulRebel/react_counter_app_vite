/* eslint-disable no-undef */

describe('Test on <DemoComponent>', () => {
    test('This test dont have to fail', () => {
        // 1.Arrange
        const message1 = 'Hello world';
        // 2.Act
        const message2 = message1.trim();
        // 3.Assert
        expect(message1).toBe(message2);
    });
})

