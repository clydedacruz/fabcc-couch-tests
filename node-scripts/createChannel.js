require('./config.js');
var hfc = require('fabric-client');

var channelFactory = require('./lib/create-channel.js');

var channelConfigPath = "../../single_org_couch_network/channel/mychannel.tx"
var channelName = "mychannel"
var username = "admin"
var orgname = "Org1"
async function createChannel(){
let message = await channelFactory.createChannel(channelName, channelConfigPath, username, orgname);
}

createChannel();
