require("dotenv").config();
const app = require("./src/app");
const dbConfig = require("./src/db/db");
const initSocketServer = require("./src/socket/socket.server");
const httpServer = require("http").createServer(app);

// Database connection
dbConfig();
//socket configuration
initSocketServer(httpServer);

httpServer.listen(3000, () => {
  console.log("server is running on port 3000");
});
