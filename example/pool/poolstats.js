const Ethermine = require('../../src/index.js'); // use ethermine-api in production
const ethermine = new Ethermine();

ethermine.getPoolStats(function(err, data){
    console.log(err, data)
})
