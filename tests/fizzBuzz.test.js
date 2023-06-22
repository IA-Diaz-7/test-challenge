const { default: expect } = require('expect');
const fizzBuzz = require('../fizzBuzz');

test('numero buzz', () => {
    expect (fizzBuzz(10)).toBe('buzz') //'Espero que la funcion fizzBuzz con el argumento 10 me de buzz'
});

test('numero fizz', () => {
    expect (fizzBuzz(9)).toBe('fizz') 
});