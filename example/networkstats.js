const Ethermine = require('../index.js'); // use ethermine-api in production
const ethermine = new Ethermine();

ethermine.getNetworkStats(function(err, data){
    console.log(err, data)
})