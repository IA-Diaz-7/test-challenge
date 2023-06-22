const { default: expect } = require('expect');
const adn = require('../dna');

test('Bases caconicas ADN', () => {
    expect (adn('CklmA')).toBe('CA');
});