const expect = require('chai').expect
const Ethermine = require('../src/index.js'); // use ethermine-api in production
const ethermine = new Ethermine();

describe('getMinerDashboard() test', function () {
  it('downloads genearal miner stats stats with status ok', function () {
  	ethermine.getMinerDashboard("0x4bd46f005099d400768dc057c96a60180e891cf9",function(err, data){
  		expect(err).to.be.a('boolean');
  		expect(err).to.be.equal(false);
  		expect(data).to.be.a('object');
  		expect(data.status).to.be.equal('OK');
      console.log(JSON.stringify(data, false , 4));
  	})
  });
});
