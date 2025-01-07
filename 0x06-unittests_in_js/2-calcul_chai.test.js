const chai = require("chai");
const expect = chai.expect;
const calculateNumber = require("./1-calcul.js");

describe('simple calculator', () => {
  it('sum calculation', () => {
    expect(calculateNumber('SUM', 1, 3)).to.be.equal(4);
    expect(calculateNumber('SUM', 1.3, 3.1)).to.be.equal(4);
    expect(calculateNumber('SUM', 1.3, 3.6)).to.be.equal(5);
    expect(calculateNumber('SUM', 1.3, 3.2)).to.be.equal(4);
  });
  it('subtract calculation', () => {
    expect(calculateNumber('SUBTRACT', 1, 3)).to.be.equal(-2);
    expect(calculateNumber('SUBTRACT', 1.3, 3.1)).to.be.equal(-2);
    expect(calculateNumber('SUBTRACT', 1.3, 3.6)).to.be.equal(-3);
    expect(calculateNumber('SUBTRACT', 1.3, 3.2)).to.be.equal(-2);
  });
  it('divide calculation', () => {
    expect(calculateNumber('DIVIDE', 1, 3)).to.be.closeTo(0.333, 0.001);
    expect(calculateNumber('DIVIDE', 4, 2)).to.be.equal(2);
    expect(calculateNumber('DIVIDE', 3, 0)).to.be.equal('Error');
  });
});
