import calculateNumber from './0-calcul.js';
import assert from 'assert';

describe('calculateNumber', () => {
  it('1 + 2 should return 3', function() {
    assert.equal(calculateNumber(1, 2), 3);
  });
  it('1.2 + 3.7 should return 6', function() {
    assert.equal(calculateNumber(1.5, 3.7), 5);
  });
  it('2.4 + 3.9 should return 6', function() {
    assert.equal(calculateNumber(2.4, 3.9), 6);
  });
  it('0 + 37.4 should return 37', function() {
    assert.equal(calculateNumber(0, 37.4), 37);
  });
  it('2.4 + 0 should return 2', function() {
    assert.equal(calculateNumber(2.4, 0), 2);
  });
});

