var util = require('util');
var path = require('path');
var hfc = require('fabric-client');
var log4js  = require('log4js');
var logger = log4js.getLogger('Helper');
logger.level = 'DEBUG';
var file = 'network-config.yaml';

var env = process.env.TARGET_NETWORK;
if (env)
	file = util.format(file, '-' + env);
else
	file = util.format(file, '');
// indicate to the application where the setup file is located so it able
// to have the hfc load it to initalize the fabric client instance
hfc.setConfigSetting('network-connection-profile-path',path.join(__dirname,file).trim());
logger.debug('Added config:\n network-connection-profile-path: ',path.join(__dirname,file).trim())

hfc.setConfigSetting('Org1-connection-profile-path',path.join(__dirname,'Org1.yaml').trim());
logger.debug('Added config:\n org1-connection-profile-path: ',path.join(__dirname,'Org1.yaml').trim())
hfc.setConfigSetting('Org2-connection-profile-path',path.join(__dirname,'Org2.yaml').trim());
logger.debug('Added config:\n org2-connection-profile-path: ',path.join(__dirname,'Org2.yaml').trim())
// some other settings the application might need to know
hfc.addConfigFile(path.join(__dirname, 'config.json'));
