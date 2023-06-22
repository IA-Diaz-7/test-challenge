const { default: expect } = require('expect');
const factorialTest = require('../factorial');

test('Regresar factorial', () => {
    expect (factorialTest(-1)).toBe('no existe factorial');
});