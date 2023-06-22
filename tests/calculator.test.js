const { default: expect } = require('expect');

const calculator = require('../calculator');

test('adds a + b', () => {
    expect (calculator.sum(5, 6)).toBe(11);
})

test('substracts a - b', () => {
    expect (calculator.substract(10,2)).toBe(8);
})

test('multiplies a * b', () => {
    expect (calculator.multiply(5, 2)).toBe(10);
})

test('divides a / b', () => {
    expect (calculator.divide(10, 2)).toBe(5);
})

test('Raises to power a ^ b', () => {
    expect (calculator.power(5, 2)).toBe(25);
})

