#!/bin/env node

// Setup env
process.env.ROOT_URL = "http://"+process.env.OPENSHIFT_APP_DNS || "http://localhost";
process.env.MONGO_URL = process.env.MONGODB_URL || "PLEASE_PROVIDE_A_MONGO_URL";
// process.env.MAIL_URL = "smtp://email:password@smtp.gmail.com:465";
process.env.PORT = process.env.OPENSHIFT_NODEJS_PORT || 8080;
process.env.BIND_IP = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';
process.env.DDP_DEFAULT_CONNECTION_URL = 'http://' + process.env.OPENSHIFT_APP_DNS + ':8000';

// Show connection details on startup
console.log("*********** Meteor 1.3 Env ************");
console.log("MONGO_URL IS: " + process.env.MONGO_URL);
console.log("ROOT_URL IS: " + process.env.ROOT_URL);
console.log("PORT: " + process.env.PORT);
console.log("BIND_IP: " + process.env.BIND_IP);
console.log("DDP_URL: " + process.env.DDP_DEFAULT_CONNECTION_URL);
console.log("************ Meteor 1.3 Env is ready ************");

require('./terminator');
require('./bundle/main.js');
