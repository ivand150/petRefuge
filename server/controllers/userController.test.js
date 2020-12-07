const user = require('../models/userModel');
const userController = require('./userController')(user);

describe('getMethod', () => {
  test('should get method return error', () => {
    const res = {
      send: jest.fn(),
    };

    user.findOne = jest.fn().mockImplementationOnce((query, callback) => {
      callback(true, {});
    });

    userController.getMethod({ query: { name: '' } }, res);

    expect(res.send).toHaveBeenCalled();
  });

  test('should get method to have been called', () => {
    const res = {
      json: jest.fn(),
    };

    user.findOne = jest.fn().mockImplementationOnce((query, callback) => {
      callback(false, {});
    });

    userController.getMethod({ query: { name: '' } }, res);

    expect(res.json).toHaveBeenCalled();
  });
});

describe('putMethod', () => {
  test('should put method return error', () => {
    const res = {
      send: jest.fn(),
    };

    user.findOneAndUpdate = jest.fn()
      .mockImplementationOnce((query, body, upsert, callback) => {
        callback(true, {});
      });

    userController.putMethod({ body: { name: '' } }, res);

    expect(res.send).toHaveBeenCalled();
  });

  test('should put method get called', () => {
    const res = {
      json: jest.fn(),
    };

    user.findOneAndUpdate = jest.fn()
      .mockImplementationOnce((query, body, upsert, callback) => {
        callback(false, {});
      });

    userController.putMethod({ body: { name: '' } }, res);

    expect(res.json).toHaveBeenCalled();
  });
});
