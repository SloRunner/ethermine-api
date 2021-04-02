const Ethermine = require('../src/index.js'); // use ethermine-api in production
const ethermine = new Ethermine();


ethermine.getEthpoolCredits(function(err,data){
	console.log(err, data)
})

ethermine.getBlockHistory(function(err, data){
    console.log(err, data)
})

ethermine.getNetworkStats(function(err, data){
    console.log(err, data)
})

ethermine.getPoolStats(function(err, data){
    console.log(err, data)
})

ethermine.getServersHistory(function(err, data){
    console.log(err, data)
})
