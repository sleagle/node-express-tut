const os = require('os')

// info about the current user
const user = os.userInfo()
console.log(user);

// method returns the system uptime in seconds
console.log(`the system uptime is: ${os.uptime()} seconds`);