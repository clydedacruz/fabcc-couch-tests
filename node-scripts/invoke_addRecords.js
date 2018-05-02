require('./config.js');

var log4js  = require('log4js');

var invoke = require('./lib/invoke-transaction.js');


//logging config start 
var logger = log4js.getLogger('Invoke Chaincode');
logger.level = 'INFO';
//logging config end 

var peers = ["peer0.org1.example.com"];
var chaincodeName = "couch_agg_cc";
var chaincodePath = "couch_agg_cc";
var chaincodeVersion = "1";
var chaincodeType = "go";
var username = "admin";
var orgname = "Org1";
let fcn = "initMarble";
//   0       1       2     3
// "marbleName", "color", "size", "owner"
// "rollingStone", "blue", "35", "bob"
let args = ["a", "blue", "10", "bob"];
let channelName = "mychannel";

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

async function invokeChaincodeFunction(args) {
    logger.debug('channelName  : ' + channelName);
    logger.debug('chaincodeName : ' + chaincodeName);
    logger.debug('fcn  : ' + fcn);
    logger.info('args  : ' + args);
    
    let message = await invoke.invokeChaincode(peers, channelName, chaincodeName, fcn, args, username, orgname);    
}

var names = [
    'bob',
    'alice',
    "raj",
    "jim",
    "carl",
    "dan",
    "james",
    "linus",
    "bill",
    "elon"
];



async function sendMultipleRecords(numRandomRecords){
    for(i=1; i<numRandomRecords; i++){
    
        let name = names[Math.floor(Math.random()*names.length)];
        let args = ["marble"+getRandomInt(9999999).toString(), "blue", getRandomInt(100).toString(), name];
        await invokeChaincodeFunction(args);
    }
    
};

sendMultipleRecords(20);
