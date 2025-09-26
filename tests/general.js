const expect = require('chai').expect;
const nock = require('nock');
const Ethermine = require('../src/index.js');
const ethermine = new Ethermine();

const miner = '0x4bd46f005099d400768dc057c96a60180e891cf9';
const worker = '051';

const mockApi = nock(ethermine.apiurl);
const mockEthpoolApi = nock('https://api.ethpool.org');

describe('General Tests with Mocks', () => {
  afterEach(() => {
    nock.cleanAll();
  });

  const tests = [
    { method: 'getPoolStats', path: '/poolStats' },
    { method: 'getBlockHistory', path: '/blocks/history' },
    { method: 'getNetworkStats', path: '/networkStats' },
    { method: 'getServersHistory', path: '/servers/history' },
    { method: 'getMinerDashboard', path: `/miner/${miner}/dashboard`, miner: true },
    { method: 'getMinerHistory', path: `/miner/${miner}/history`, miner: true },
    { method: 'getMinerPayouts', path: `/miner/${miner}/payouts`, miner: true },
    { method: 'getMinerRounds', path: `/miner/${miner}/rounds`, miner: true },
    { method: 'getMinerSettings', path: `/miner/${miner}/settings`, miner: true },
    { method: 'getMinerCurrentStats', path: `/miner/${miner}/currentStats`, miner: true },
    { method: 'getMinerWorkers', path: `/miner/${miner}/workers`, miner: true },
    { method: 'getWorkerHistory', path: `/miner/${miner}/worker/${worker}/history`, miner: true, worker: true },
    { method: 'getWorkerCurrentStats', path: `/miner/${miner}/worker/${worker}/currentStats`, miner: true, worker: true },
  ];

  tests.forEach(test => {
    it(`downloads ${test.method} with status ok`, (done) => {
      mockApi.get(test.path).reply(200, { status: 'OK' });

      const args = [];
      if (test.miner) args.push(miner);
      if (test.worker) args.push(worker);
      args.push((err, data) => {
        expect(err).to.be.false;
        expect(data).to.be.an('object');
        expect(data.status).to.equal('OK');
        done();
      });
      ethermine[test.method](...args);
    });
  });

  it('changes the api endpoint based on whitelist', (done) => {
    ethermine.setAPIurl('https://api-zcash.flypool.org', (err, data) => {
      expect(err).to.be.false;
      expect(data).to.be.a('string');
      done();
    });
  });

  it('changes the api endpoint based on whitelist, not whitelisted domain', (done) => {
    ethermine.setAPIurl('https://example.com', (err, data) => {
      expect(err).to.be.true;
      expect(data).to.be.a('string');
      done();
    });
  });

  it('getEthpoolCredits() wrong domain test', (done) => {
    ethermine.getEthpoolCredits((err, data) => {
      expect(err).to.be.true;
      expect(data).to.be.a('string');
      done();
    });
  });

  it('getEthpoolCredits() ok domain test', (done) => {
    const ethermine2 = new Ethermine('https://api.ethpool.org');
    mockEthpoolApi.get('/credits').reply(200, { status: 'OK' });
    ethermine2.getEthpoolCredits((err, data) => {
      expect(err).to.be.false;
      expect(data).to.be.an('object');
      expect(data.status).to.equal('OK');
      done();
    });
  });
});