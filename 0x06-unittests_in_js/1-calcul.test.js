const calculateNumber = require("./1-calcul.js");
const assert = require("assert");

describe('simple calculator', () => {
  it('sum calculation', () => {
    assert.equal(calculateNumber('SUM', 1, 3), 4);
    assert.equal(calculateNumber('SUM', 1.3, 3.1), 4);
    assert.equal(calculateNumber('SUM', 1.3, 3.6), 5);
    assert.equal(calculateNumber('SUM', 1.3, 3.2), 4);
  });
  it('subtract calculation', () => {
    assert.equal(calculateNumber('SUBTRACT', 1, 3), -2);
    assert.equal(calculateNumber('SUBTRACT', 1.3, 3.1), -2);
    assert.equal(calculateNumber('SUBTRACT', 1.3, 3.6), -3);
    assert.equal(calculateNumber('SUBTRACT', 1.3, 3.2), -2);
  });
  it('divide calculation', () => {
    assert.equal(calculateNumber('DIVIDE', 1, 3), 0.3333333333333333);
    assert.equal(calculateNumber('DIVIDE', 4, 2), 2);
    assert.equal(calculateNumber('DIVIDE', 3, 0), 'Error');
  });
});
