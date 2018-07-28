const Ethermine = require('../index.js'); // use ethermine-api in production
const ethermine = new Ethermine();

ethermine.getBlockHistory(function(err, data){
    console.log(err, data)
})