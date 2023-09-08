const express = require("express");
const { ServerConfig } = require("./config");
const apiRoutes = require("./routes");
const app = express();

app.use("/api", apiRoutes);
app.listen(ServerConfig.PORT, () => {
  console.log(`server running on Port ${ServerConfig.PORT}`);
});
