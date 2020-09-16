const expect = require('chai').expect
const Ethermine = require('../src/index.js'); // use ethermine-api in production
const ethermine = new Ethermine();

describe('getMinerDashboard() test', function () {
  it('downloads genearal miner stats with status ok', function () {
  	ethermine.getMinerDashboard("0x4bd46f005099d400768dc057c96a60180e891cf9",function(err, data){
  		expect(err).to.be.a('boolean');
  		expect(err).to.be.equal(false);
  		expect(data).to.be.a('object');
  		expect(data.status).to.be.equal('OK');
  	})
  });
});

describe('getMinerHistory() test', function () {
  it('downloads miner history with status ok', function () {
  	ethermine.getMinerHistory("0x4bd46f005099d400768dc057c96a60180e891cf9",function(err, data){
  		expect(err).to.be.a('boolean');
  		expect(err).to.be.equal(false);
  		expect(data).to.be.a('object');
  		expect(data.status).to.be.equal('OK');
  	})
  });
});

describe('getMinerPayouts() test', function () {
  it('downloads miner payouts with status ok', function () {
  	ethermine.getMinerPayouts("0x4bd46f005099d400768dc057c96a60180e891cf9",function(err, data){
  		expect(err).to.be.a('boolean');
  		expect(err).to.be.equal(false);
  		expect(data).to.be.a('object');
  		expect(data.status).to.be.equal('OK');
  	})
  });
});

describe('getMinerRounds() test', function () {
  it('downloads miner rounds with status ok', function () {
  	ethermine.getMinerRounds("0x4bd46f005099d400768dc057c96a60180e891cf9",function(err, data){
  		expect(err).to.be.a('boolean');
  		expect(err).to.be.equal(false);
  		expect(data).to.be.a('object');
  		expect(data.status).to.be.equal('OK');
  	})
  });
});

describe('getMinerSettings() test', function () {
  it('downloads miner settings with status ok', function () {
  	ethermine.getMinerSettings("0x4bd46f005099d400768dc057c96a60180e891cf9",function(err, data){
  		expect(err).to.be.a('boolean');
  		expect(err).to.be.equal(false);
  		expect(data).to.be.a('object');
  		expect(data.status).to.be.equal('OK');
  	})
  });
});

describe('getMinerCurrentStats() test', function () {
  it('downloads miner current stats with status ok', function () {
  	ethermine.getMinerSettings("0x4bd46f005099d400768dc057c96a60180e891cf9",function(err, data){
  		expect(err).to.be.a('boolean');
  		expect(err).to.be.equal(false);
  		expect(data).to.be.a('object');
  		expect(data.status).to.be.equal('OK');
  	})
  });
});
