// You already have the methods imported
const { default: expect } = require('expect');
const {getUser, getUsers} = require('../users');
const { test } = require('picomatch');

test('encontrar usuario', () => {
    expect (getUser(4).username).toBe('unsurejudy');
});


// Make a test to verify if the method getUser(id) works correctly
// Verify any data of the resulting object you want

// READ documentation