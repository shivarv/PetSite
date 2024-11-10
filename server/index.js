// index.js

const app = require("./app");
const config = require("./config/config");

const PORT = config.port;

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});