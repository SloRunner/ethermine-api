const expect = require('chai').expect
const Ethermine = require('../src/index.js'); // use ethermine-api in production
const ethermine = new Ethermine("https://api.ethermine.org",true);

describe('[ETH] getPoolStats() test', function () {
  it('downloads pool stats with status ok', function () {
  	ethermine.getPoolStats(function(err, data){
  		expect(err).to.be.a('boolean');
  		expect(err).to.be.equal(false);
  		expect(data).to.be.a('object');
  		expect(data.status).to.be.equal('OK');
      console.log(JSON.stringify(data, false , 4));
  	})
  });
});

describe('[ETH] getBlockHistory() test', function () {
  it('downloads block history with status ok', function () {
  	ethermine.getBlockHistory(function(err, data){
  		expect(err).to.be.a('boolean');
  		expect(err).to.be.equal(false);
  		expect(data).to.be.a('object');
  		expect(data.status).to.be.equal('OK');
  	})
  });
});

describe('[ETH] getNetworkStats() test', function () {
  it('downloads network stats with status ok', function () {
  	ethermine.getBlockHistory(function(err, data){
  		expect(err).to.be.a('boolean');
  		expect(err).to.be.equal(false);
  		expect(data).to.be.a('object');
  		expect(data.status).to.be.equal('OK');
  	})
  });
});

describe('[ETH] getServersHistory() test', function () {
  it('downloads servers history with status ok', function () {
  	ethermine.getBlockHistory(function(err, data){
  		expect(err).to.be.a('boolean');
  		expect(err).to.be.equal(false);
  		expect(data).to.be.a('object');
  		expect(data.status).to.be.equal('OK');
  	})
  });
});
