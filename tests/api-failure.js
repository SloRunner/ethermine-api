const expect = require('chai').expect;
const nock = require('nock');
const Ethermine = require('../src/index.js');
const ethermine = new Ethermine();

describe('API Failure Tests', () => {
  const apiMethods = [
    { name: 'getPoolStats', path: '/poolStats' },
    { name: 'getBlockHistory', path: '/blocks/history' },
    { name: 'getNetworkStats', path: '/networkStats' },
    { name: 'getServersHistory', path: '/servers/history' },
    { name: 'getMinerDashboard', path: '/miner/miner/dashboard', requiresMiner: true },
    { name: 'getMinerHistory', path: '/miner/miner/history', requiresMiner: true },
    { name: 'getMinerPayouts', path: '/miner/miner/payouts', requiresMiner: true },
    { name: 'getMinerRounds', path: '/miner/miner/rounds', requiresMiner: true },
    { name: 'getMinerSettings', path: '/miner/miner/settings', requiresMiner: true },
    { name: 'getMinerCurrentStats', path: '/miner/miner/currentStats', requiresMiner: true },
    { name: 'getMinerWorkers', path: '/miner/miner/workers', requiresMiner: true },
    { name: 'getWorkerHistory', path: '/miner/miner/worker/worker/history', requiresMiner: true, requiresWorker: true },
    { name: 'getWorkerCurrentStats', path: '/miner/miner/worker/worker/currentStats', requiresMiner: true, requiresWorker: true },
  ];

  afterEach(() => {
    nock.cleanAll();
  });

  apiMethods.forEach((method) => {
    it(`should handle API error for ${method.name}`, (done) => {
      nock(ethermine.apiurl)
        .get(method.path)
        .reply(500, { error: 'Internal Server Error' });

      const args = [];
      if (method.requiresMiner) args.push('miner');
      if (method.requiresWorker) args.push('worker');
      args.push((err, data) => {
        expect(err).to.be.true;
        expect(data).to.equal('');
        done();
      });
      ethermine[method.name](...args);
    });
  });

  it('should handle error for getEthpoolCredits on wrong domain', (done) => {
    const ethermine = new Ethermine();
    ethermine.getEthpoolCredits((err, data) => {
        expect(err).to.be.true;
        expect(data).to.equal('Only works on ethpool.api');
        done();
    });
  });

  it('should handle API error for getEthpoolCredits', (done) => {
    const ethermineEthpool = new Ethermine('https://api.ethpool.org');
    nock('https://api.ethpool.org')
      .get('/credits')
      .reply(500, { error: 'Internal Server Error' });

    ethermineEthpool.getEthpoolCredits((err, data) => {
      expect(err).to.be.true;
      expect(data).to.equal('');
      done();
    });
  });
});