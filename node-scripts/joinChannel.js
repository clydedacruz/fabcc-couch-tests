
var join = require('./lib/join-channel.js');
var channelName = "mychannel"
var username = "admin"
var orgname = "org1"
var peers = ["peer0.org1.example.com"]

async function joinChannel() {
    let message =  await join.joinChannel(channelName, peers, username, orgname);
    console.log(message)
    let message1 = await join.joinChannel(channelName, ["peer0.org2.example.com"], username, "org2");
    console.log(message1)
}

joinChannel();