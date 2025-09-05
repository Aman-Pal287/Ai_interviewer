require("dotenv").config();
const app = require("./src/app");
const dbConfig = require("./src/db/db");

// Database connection
dbConfig();

app.listen(3000, () => {
  console.log("server is running on port ");
});
