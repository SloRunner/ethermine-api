'use strict'
const request = require('request')
let browser = request.defaults({
  headers: {'User-Agent': 'The Botfather NodeJS module (https://www.npmjs.com/package/ethermine-api)'}
})

const axios = require('axios').default

let axiosbrowser = axios.create({
  headers: {'User-Agent': 'The Botfather NodeJS module (https://www.npmjs.com/package/ethermine-api)'}
})

class Ethermine {
  constructor(apilink, debugit = false) {
    this.apiurl = apilink || 'https://api.ethermine.org';
    if (!this.apiurl || this.apiurl.length == 0) {
      throw new Error("API url is not defined");
    }
    if (debugit) {
      console.log("API URL: " + this.apiurl)
    }
  }
  getPoolStats(callback) {
    browser(this.apiurl + '/poolStats', { json: true }, function(error, res, body) {
          if (!error && res.statusCode == 200) {
              callback(false, body)
          } else {
              callback(true, "")
          }
    })
  }
  getBlockHistory(callback){
    browser(this.apiurl + '/blocks/history', { json: true }, function(error, res, body) {
          if (!error && res.statusCode == 200) {
              callback(false, body)
          } else {
              callback(true, "")
          }
    })
  }
  getNetworkStats(callback){
    browser(this.apiurl + '/networkStats', { json: true }, function(error, res, body) {
          if (!error && res.statusCode == 200) {
              callback(false, body)
          } else {
              callback(true, "")
          }
    })
  }
  getServersHistory(callback){
    browser(this.apiurl + '/servers/history', { json: true }, function(error, res, body) {
          if (!error && res.statusCode == 200) {
              callback(false, body)
          } else {
              callback(true, "")
          }
    })
  }
  getEthpoolCredits(callback){
    if (this.apiurl != 'https://api.ethpool.org') {
      return callback(true, 'Only works on ethpool.api')
    };
    browser(this.apiurl + '/credits', { json: true }, function(error, res, body) {
          if (!error && res.statusCode == 200) {
              callback(false, body)
          } else {
              callback(true, "")
          }
    })
  }
  getMinerDashboard(miner, callback){
    if (!miner) {
      throw new Error("No miner specified");
    }
    browser(this.apiurl + '/miner/'+miner+'/dashboard', { json: true }, function(error, res, body) {
          if (!error && res.statusCode == 200) {
              callback(false, body)
          } else {
              callback(true, "")
          }
    })
  }
  getMinerHistory(miner, callback){
    if (!miner) {
      throw new Error("No miner specified");
    }
    browser(this.apiurl + '/miner/'+miner+'/history', { json: true }, function(error, res, body) {
          if (!error && res.statusCode == 200) {
              callback(false, body)
          } else {
              callback(true, "")
          }
    })
  }
  getMinerPayouts(miner, callback){
    if (!miner) {
      throw new Error("No miner specified");
    }
    browser(this.apiurl + '/miner/'+miner+'/payouts', { json: true }, function(error, res, body) {
          if (!error && res.statusCode == 200) {
              callback(false, body)
          } else {
              callback(true, "")
          }
    })
  }
  getMinerRounds(miner, callback){
    if (!miner) {
      throw new Error("No miner specified");
    }
    browser(this.apiurl + '/miner/'+miner+'/rounds', { json: true }, function(error, res, body) {
          if (!error && res.statusCode == 200) {
              callback(false, body)
          } else {
              callback(true, "")
          }
    })
  }
  getMinerSettings(miner, callback){
    if (!miner) {
      throw new Error("No miner specified");
    }
    browser(this.apiurl + '/miner/'+miner+'/settings', { json: true }, function(error, res, body) {
          if (!error && res.statusCode == 200) {
              callback(false, body)
          } else {
              callback(true, "")
          }
    })
  }
  getMinerCurrentStats(miner, callback){
    if (!miner) {
      throw new Error("No miner specified");
    }
    browser(this.apiurl + '/miner/'+miner+'/currentStats', { json: true }, function(error, res, body) {
          if (!error && res.statusCode == 200) {
              callback(false, body)
          } else {
              callback(true, "")
          }
    })
  }

  getMinerWorkers(miner, callback){
    if (!miner) {
      throw new Error("No miner specified");
    }
    browser(this.apiurl + '/miner/'+miner+'/workers', { json: true }, function(error, res, body) {
          if (!error && res.statusCode == 200) {
              callback(false, body)
          } else {
              callback(true, "")
          }
    })
  }
  getWorkerHistory(miner, worker, callback){
    if (!miner) {
      throw new Error("No miner specified");
    }
    if (!worker) {
      throw new Error("No worker specified")
    }
    browser(this.apiurl + '/miner/'+miner+'/worker'+worker+'/history', { json: true }, function(error, res, body) {
          if (!error && res.statusCode == 200) {
              callback(false, body)
          } else {
              callback(true, "")
          }
    })
  }
  getWorkerCurrentStats(miner, worker, callback){
    if (!miner) {
      throw new Error("No miner specified");
    }
    if (!worker) {
      throw new Error("No worker specified")
    }
    browser(this.apiurl + '/miner/'+miner+'/worker'+worker+'/currentStats', { json: true }, function(error, res, body) {
          if (!error && res.statusCode == 200) {
              callback(false, body)
          } else {
              callback(true, "")
          }
    })
  }
  setAPIurl(url = 'https://api.ethermine.org', callback){
    let validapi = ['https://api.ethermine.org', 'https://api-zcash.flypool.org', 'https://api-ycash.flypool.org', 'https://api-etc.ethermine.org', 'https://api-beam.flypool.org', 'https://api-ravencoin.flypool.org', 'https://api.ethpool.org'];
    if (validapi.indexOf(url) > -1) {
      this.apiurl = url;
      callback(false, 'API URL set to: ' + url);
    }else{
      callback(true, 'API not supported');
    }
  }
}

class EthermineAxios {

  constructor(apilink, debugit = false) {
    this.apiurl = apilink || 'https://api.ethermine.org';
    if (!this.apiurl || this.apiurl.length == 0) {
      throw new Error("API url is not defined");
    }
    if (debugit) {
      console.log("API URL: " + this.apiurl)
    }
  }
  getPoolStats(callback) {
    axiosbrowser.get(this.apiurl + '/poolStats')
    .then(function(body){
      callback(false,body.data)
    })
    .catch(function(err){
      callback(true, {})
    })
  }
  getBlockHistory(callback){
    axiosbrowser.get(this.apiurl + '/blocks/history')
    .then(function(body){
      callback(false,body.data)
    })
    .catch(function(err){
      callback(true, "")
    })
  }
  getNetworkStats(callback){
    axiosbrowser.get(this.apiurl + '/networkStats')
    .then(function(body){
      callback(false,body.data)
    })
    .catch(function(err){
      callback(true, "")
    })
  }
  getServersHistory(callback){
    axiosbrowser.get(this.apiurl + '/servers/history')
    .then(function(body){
      callback(false,body.data)
    })
    .catch(function(err){
      callback(true,"")
    })
  }
  getEthpoolCredits(callback){
    if (this.apiurl != 'https://api.ethpool.org') {
      return callback(true, 'Only works on ethpool.api')
    };
    axiosbrowser.get(this.apiurl + '/credits')
    .then(function(body){
      callback(false,body.data)
    })
    .catch(function(err){
      callback(true,"")
    })
  }
  getMinerDashboard(miner, callback){
    if (!miner) {
      throw new Error("No miner specified");
    }
    axiosbrowser.get(this.apiurl + '/miner/'+miner+'/dashboard')
    .then(function(body){
      callback(false,body.data)
    })
    .catch(function(err){
      callback(true,"")
    })
  }
  getMinerHistory(miner, callback){
    if (!miner) {
      throw new Error("No miner specified");
    }
    axiosbrowser.get(this.apiurl + '/miner/'+miner+'/history')
    .then(function(body){
      callback(false,body.data)
    })
    .catch(function(err){
      callback(true,"")
    })
  }
  getMinerPayouts(miner, callback){
    if (!miner) {
      throw new Error("No miner specified");
    }
    axiosbrowser.get(this.apiurl + '/miner/'+miner+'/payouts')
    .then(function(body){
      callback(false,body.data)
    })
    .catch(function(err){
      callback(true,"")
    })
  }
  getMinerRounds(miner, callback){
    if (!miner) {
      throw new Error("No miner specified");
    }
    axiosbrowser.get(this.apiurl + '/miner/'+miner+'/rounds')
    .then(function(body){
      callback(false,body.data)
    })
    .catch(function(err){
      callback(true,"")
    })
  }
  getMinerSettings(miner, callback){
    if (!miner) {
      throw new Error("No miner specified");
    }
    axiosbrowser.get(this.apiurl + '/miner/'+miner+'/settings')
    .then(function(body){
      callback(false,body.data)
    })
    .catch(function(err){
      callback(true,"")
    })
  }
  getMinerCurrentStats(miner, callback){
    if (!miner) {
      throw new Error("No miner specified");
    }
    axiosbrowser.get(this.apiurl + '/miner/'+miner+'/currentStats')
    .then(function(body){
      callback(false,body.data)
    })
    .catch(function(err){
      callback(true,"")
    })
  }

  getMinerWorkers(miner, callback){
    if (!miner) {
      throw new Error("No miner specified");
    }
    browser(this.apiurl + '/miner/'+miner+'/workers', { json: true }, function(error, res, body) {
          if (!error && res.statusCode == 200) {
              callback(false, body.data)
          } else {
              callback(true, "")
          }
    })
  }
  getWorkerHistory(miner, worker, callback){
    if (!miner) {
      throw new Error("No miner specified");
    }
    if (!worker) {
      throw new Error("No worker specified")
    }
    axiosbrowser.get(this.apiurl + '/miner/'+miner+'/worker'+worker+'/history')
    .then(function(body){
      callback(false,body.data)
    })
    .catch(function(err){
      callback(true,"")
    })
  }
  getWorkerCurrentStats(miner, worker, callback){
    if (!miner) {
      throw new Error("No miner specified");
    }
    if (!worker) {
      throw new Error("No worker specified")
    }
    axiosbrowser.get(this.apiurl + '/miner/'+miner+'/worker'+worker+'/currentStats')
    .then(function(body){
      callback(false,body.data)
    })
    .catch(function(err){
      callback(true,"")
    })
  }
  setAPIurl(url = 'https://api.ethermine.org', callback){
    let validapi = ['https://api.ethermine.org', 'https://api-zcash.flypool.org', 'https://api-ycash.flypool.org', 'https://api-etc.ethermine.org', 'https://api-beam.flypool.org', 'https://api-ravencoin.flypool.org', 'https://api.ethpool.org'];
    if (validapi.indexOf(url) > -1) {
      this.apiurl = url;
      callback(false, 'API URL set to: ' + url);
    }else{
      callback(true, 'API not supported');
    }
  }
}

module.exports = {
  Ethermine: Ethermine,
  EthermineAxios: EthermineAxios
}