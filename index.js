const liveServer = require('live-server');
const params = {
  port: process.env.PORT || 9000, // Set the port number you prefer
  root: '.', // Set the root directory of your project,
  file:"./view/index.html",
  open: true, // Open the browser when server starts
};

liveServer.start(params);