const expect = require('chai').expect
const Ethermine = require('../src/index.js'); // use ethermine-api in production
const ethermine = new Ethermine.EthermineFetch();

describe('[node-fetch] getPoolStats() test', function () {
  it('downloads pool stats with status ok', function () {
  	ethermine.getPoolStats(function(err, data){
  		expect(err).to.be.a('boolean');
  		expect(err).to.be.equal(false);
  		expect(data).to.be.a('object');
  		expect(data.status).to.be.equal('OK');
  	})
  });
});

describe('[node-fetch] getBlockHistory() test', function () {
  it('downloads block history with status ok', function () {
  	ethermine.getBlockHistory(function(err, data){
  		expect(err).to.be.a('boolean');
  		expect(err).to.be.equal(false);
  		expect(data).to.be.a('object');
  		expect(data.status).to.be.equal('OK');
  	})
  });
});

describe('[node-fetch] getNetworkStats() test', function () {
  it('downloads network stats with status ok', function () {
  	ethermine.getNetworkStats(function(err, data){
  		expect(err).to.be.a('boolean');
  		expect(err).to.be.equal(false);
  		expect(data).to.be.a('object');
  		expect(data.status).to.be.equal('OK');
  	})
  });
});

describe('[node-fetch] getServersHistory() test', function () {
  it('downloads servers history with status ok', function () {
  	ethermine.getBlockHistory(function(err, data){
  		expect(err).to.be.a('boolean');
  		expect(err).to.be.equal(false);
  		expect(data).to.be.a('array');
  		expect(data.status).to.be.equal('OK');
  	})
  });
});

describe('[node-fetch] getMinerDashboard() test', function () {
  it('downloads genearal miner stats with status ok', function () {
  	ethermine.getMinerDashboard("0x4bd46f005099d400768dc057c96a60180e891cf9",function(err, data){
  		expect(err).to.be.a('boolean');
  		expect(err).to.be.equal(false);
  		expect(data).to.be.a('object');
  		expect(data.status).to.be.equal('OK');
  	})
  });
});

describe('[node-fetch] getMinerHistory() test', function () {
  it('downloads miner history with status ok', function () {
  	ethermine.getMinerHistory("0x4bd46f005099d400768dc057c96a60180e891cf9",function(err, data){
  		expect(err).to.be.a('boolean');
  		expect(err).to.be.equal(false);
  		expect(data).to.be.a('object');
  		expect(data.status).to.be.equal('OK');
  	})
  });
});

describe('[node-fetch] getMinerPayouts() test', function () {
  it('downloads miner payouts with status ok', function () {
  	ethermine.getMinerPayouts("0x4bd46f005099d400768dc057c96a60180e891cf9",function(err, data){
  		expect(err).to.be.a('boolean');
  		expect(err).to.be.equal(false);
  		expect(data).to.be.a('object');
  		expect(data.status).to.be.equal('OK');
  	})
  });
});

describe('[node-fetch] getMinerRounds() test', function () {
  it('downloads miner rounds with status ok', function () {
  	ethermine.getMinerRounds("0x4bd46f005099d400768dc057c96a60180e891cf9",function(err, data){
  		expect(err).to.be.a('boolean');
  		expect(err).to.be.equal(false);
  		expect(data).to.be.a('object');
  		expect(data.status).to.be.equal('OK');
  	})
  });
});

describe('[node-fetch] getMinerSettings() test', function () {
  it('downloads miner settings with status ok', function () {
  	ethermine.getMinerSettings("0x4bd46f005099d400768dc057c96a60180e891cf9",function(err, data){
  		expect(err).to.be.a('boolean');
  		expect(err).to.be.equal(false);
  		expect(data).to.be.a('array');
  		expect(data.status).to.be.equal('OK');
  	})
  });
});

describe('[node-fetch] getMinerCurrentStats() test', function () {
  it('downloads miner current stats with status ok', function () {
  	ethermine.getMinerSettings("0x4bd46f005099d400768dc057c96a60180e891cf9",function(err, data){
  		expect(err).to.be.a('boolean');
  		expect(err).to.be.equal(false);
  		expect(data).to.be.a('object');
  		expect(data.status).to.be.equal('OK');
  	})
  });
});

describe('[node-fetch] getMinerWorkers() test', function () {
  it('downloads miner workers with status ok', function () {
  	ethermine.getMinerWorkers("0x4bd46f005099d400768dc057c96a60180e891cf9",function(err, data){
  		expect(err).to.be.a('boolean');
  		expect(err).to.be.equal(false);
  		expect(data).to.be.a('object');
  		expect(data.status).to.be.equal('OK');
  	})
  });
});

describe('[node-fetch] getWorkerHistory() test', function () {
  it('downloads miner worker history with status ok', function () {
  	ethermine.getWorkerHistory("0x4bd46f005099d400768dc057c96a60180e891cf9", "331",function(err, data){
  		expect(err).to.be.a('boolean');
  		expect(err).to.be.equal(false);
  		expect(data).to.be.a('object');
  		expect(data.status).to.be.equal('OK');
  	})
  });
});

describe('[node-fetch] getWorkerCurrentStats() test', function () {
  it('downloads worker current stats with status ok', function () {
  	ethermine.getWorkerCurrentStats("0x4bd46f005099d400768dc057c96a60180e891cf9", "331",function(err, data){
  		expect(err).to.be.a('boolean');
  		expect(err).to.be.equal(false);
  		expect(data).to.be.a('object');
  		expect(data.status).to.be.equal('OK');
  	})
  });
});

describe('[node-fetch] setAPIurl() test', function() {
  it('changes the api endpoint based on whitelist', function(){
    ethermine.setAPIurl('https://api-zcash.flypool.org', function(err, data){
      expect(err).to.be.equal(false);
      expect(data).to.be.a('string')
    })
  })
})

describe('[node-fetch] setAPIurl() test', function() {
  it('changes the api endpoint based on whitelist, not whitelisted domain', function(){
    ethermine.setAPIurl('https://example.com', function(err, data){
      expect(err).to.be.equal(true);
      expect(data).to.be.a('string')
    })
  })
})

describe('[node-fetch] getEthpoolCredits() wrong domain test', function() {
  it('Gets data from /credits endpoint only from ethpool.com', function(){
    ethermine.getEthpoolCredits(function(err, data){
      expect(err).to.be.equal(true);
      expect(data).to.be.a('string')
    })
  })
})

const ethermine2 = new Ethermine.EthermineAxios('https://api.ethpool.org');
describe('[node-fetch] getEthpoolCredits() ok domain test', function() {
  it('Gets data from /credits endpoint only from ethpool.com', function(){
    ethermine2.getEthpoolCredits(function(err, data){
      expect(err).to.be.a('boolean');
      expect(err).to.be.equal(false);
      expect(data).to.be.a('object');
      expect(data.status).to.be.equal('OK');
    })
  })
})
