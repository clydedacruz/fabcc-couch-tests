require('./config.js');

var helper = require('./lib/helper.js');
let username = "admin"
let orgName = "Org1"
async function enroll() {
let response = await helper.getRegisteredUser(username, orgName, true);
console.log(response);
let response2 = await helper.getRegisteredUser(username, "Org2", true);

console.log(response2);
}
enroll();
