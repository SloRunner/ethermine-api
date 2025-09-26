const expect = require('chai').expect;
const Ethermine = require('../src/index.js');
const ethermine = new Ethermine();

describe('Input Validation', () => {
  const minerMethods = [
    'getMinerDashboard',
    'getMinerHistory',
    'getMinerPayouts',
    'getMinerRounds',
    'getMinerSettings',
    'getMinerCurrentStats',
    'getMinerWorkers',
  ];

  minerMethods.forEach((method) => {
    it(`should throw an error if no miner is specified for ${method}`, () => {
      expect(() => ethermine[method]()).to.throw('No miner specified');
      expect(() => ethermine[method](null, () => {})).to.throw('No miner specified');
    });
  });

  const workerMethods = [
    'getWorkerHistory',
    'getWorkerCurrentStats',
  ];

  workerMethods.forEach((method) => {
    it(`should throw an error if no miner is specified for ${method}`, () => {
      expect(() => ethermine[method]()).to.throw('No miner specified');
      expect(() => ethermine[method](null, 'worker', () => {})).to.throw('No miner specified');
    });

    it(`should throw an error if no worker is specified for ${method}`, () => {
      expect(() => ethermine[method]('miner')).to.throw('No worker specified');
      expect(() => ethermine[method]('miner', null, () => {})).to.throw('No worker specified');
    });
  });
});