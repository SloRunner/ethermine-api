const Ethermine = require('../src/index.js'); // use ethermine-api in production
const ethermine = new Ethermine();

let miner = "0x4bd46f005099d400768dc057c96a60180e891cf9";
let worker = "051";

ethermine.getMinerWorkers(miner, function(err,data){
  console.log(err, data);
})

ethermine.getWorkerHistory(miner, worker, function(err, data){
  console.log(err, data);
})

ethermine.getWorkerCurrentStats(miner, worker, function(err, data){
  console.log(err,data);
})
