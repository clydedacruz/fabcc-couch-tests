require('./config.js');
let chaincodeInstaller = require('./lib/install-chaincode.js');
var instantiate = require('./lib/instantiate-chaincode.js');
var peers = ["peer0.org1.example.com"];
var chaincodeName = "couch_agg_cc";
var chaincodePath = "couch_agg_cc";
var chaincodeVersion = "1";
var chaincodeType = "go";
var username = "admin";
var orgname = "Org1";
async function installChaincode() {
    let message = await chaincodeInstaller.installChaincode(peers, chaincodeName, chaincodePath, chaincodeVersion, chaincodeType, username, orgname);    
    console.log(message);
    let message2 = await chaincodeInstaller.installChaincode(["peer0.org2.example.com"], chaincodeName, chaincodePath, chaincodeVersion, chaincodeType, username, "Org2");    

    console.log(message2);
}

async function instantiateChaincode(){

   let fcn = "Init";
   let args = ["a","1000","b","2000"];
   let channelName = "mychannel";

    let message = await instantiate.instantiateChaincode(peers, channelName, chaincodeName, chaincodeVersion, chaincodeType, fcn, args, username, orgname);
    console.log(message);
}

// installChaincode();
instantiateChaincode();
