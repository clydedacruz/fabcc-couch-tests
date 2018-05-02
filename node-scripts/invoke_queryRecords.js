require('./config.js');

var log4js  = require('log4js');

var query = require('./lib/query.js');


//logging config start 
var logger = log4js.getLogger('Invoke Chaincode');
logger.level = 'INFO';
//logging config end 

var peer = "peer0.org1.example.com";
var chaincodeName = "couch_agg_cc";
var chaincodePath = "couch_agg_cc";
var chaincodeVersion = "1";
var chaincodeType = "go";
var username = "admin";
var orgname = "Org1";
let fcn = "queryMarbles";
//   0       1       2     3
// "marbleName", "color", "size", "owner"
// "rollingStone", "blue", "35", "bob"
let args = ["a", "blue", "10", "bob"];
let channelName = "mychannel";

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

async function queryChaincodeFunction(args) {
    logger.debug('channelName  : ' + channelName);
    logger.debug('chaincodeName : ' + chaincodeName);
    logger.debug('fcn  : ' + fcn);
    logger.info('args  : ' + args);
    
    let message = await query.queryChaincode(peer, channelName, chaincodeName, args, fcn, username, orgname);
    logger.info(message)
}



queryChaincodeFunction(["{\"selector\": {\"docType\":\"marble\",\"owner\": \"elon\",\"size\": { \"$gt\": 50}} }"]);
