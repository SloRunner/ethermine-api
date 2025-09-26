const expect = require('chai').expect;
const Ethermine = require('../src/index.js');

describe('Ethermine Constructor', () => {
  it('should use the default API URL when none is provided', () => {
    const ethermine = new Ethermine();
    expect(ethermine.apiurl).to.equal('https://api.ethermine.org');
  });

  it('should use the provided API URL', () => {
    const customApiUrl = 'https://api.ethpool.org';
    const ethermine = new Ethermine(customApiUrl);
    expect(ethermine.apiurl).to.equal(customApiUrl);
  });

  it('should throw an error when an empty string is provided for the API URL', () => {
    expect(() => new Ethermine('')).to.throw('API url is not defined');
  });

  it('should throw an error when null is provided for the API URL', () => {
    expect(() => new Ethermine(null)).to.throw('API url is not defined');
  });

  it('should not throw an error for valid configurations', () => {
    expect(() => new Ethermine()).to.not.throw();
    expect(() => new Ethermine('https://api.ethpool.org')).to.not.throw();
  });
});