const Ethermine = require('../src/index.js'); // use ethermine-api in production
const ethermine = new Ethermine();

let miner = "0x4bd46f005099d400768dc057c96a60180e891cf9";

ethermine.getMinerDashboard(miner, function(err, data){
    console.log(err, data)
})

ethermine.getMinerRounds(miner, function(err, data) {
  console.log(err, data)
})

ethermine.getMinerHistory(miner, function(err, data) {
  console.log(err, data)
})

ethermine.getMinerPayouts(miner, function(err, data) {
  console.log(err, data)
})

ethermine.getMinerWorkers(miner, function(err, data) {
  console.log(err, data)
})

ethermine.getMinerSettings(miner, function(err, data) {
  console.log(err, data)
})

ethermine.getMinerCurrentStats(miner, function(err, data) {
  console.log(err, data)
})
