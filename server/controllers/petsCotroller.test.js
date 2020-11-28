const pets = require('../models/petModel');
const petsController = require('./petsController')(pets);

describe('getMethod', () => {
  test('Should getMethod return error', () => {
    const res = {
      send: jest.fn(),
    };

    pets.find = jest.fn().mockImplementationOnce((query, callback) => {
      callback(true, {});
    });

    petsController.getMethod({}, res);

    expect(res.send).toHaveBeenCalled();
  });
  test('Should getMethod return res.json', () => {
    const res = {
      json: jest.fn(),
    };

    pets.find = jest.fn().mockImplementationOnce((query, callback) => {
      callback(false, {});
    });

    petsController.getMethod({}, res);

    expect(res.json).toHaveBeenCalled();
  });
});

describe('putMethod', () => {
  test('Should putMethod return error', () => {
    const res = {
      send: jest.fn(),
    };

    pets.create = jest.fn().mockImplementationOnce((query, callback) => {
      callback(true, {});
    });

    petsController.putMethod({}, res);

    expect(res.send).toHaveBeenCalled();
  });
  test('Should putMethod send a create document message', () => {
    const res = {
      send: jest.fn(),
    };

    pets.create = jest.fn().mockImplementationOnce((query, callback) => {
      callback(false, {});
    });

    petsController.putMethod({}, res);

    expect(res.send).toHaveBeenCalled();
  });
});
