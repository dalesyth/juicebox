const PORT = 3000;
const express = require("express");
const server = express();

require("dotenv").config();

const { SERVER_PORT } = process.env;

const morgan = require("morgan");
server.use(morgan("dev"));

server.use(express.json());

const apiRouter = require("./api");
server.use("/api", apiRouter);

const { client } = require("./db");

client.connect();

server.listen(SERVER_PORT, () => {
  console.log(`Server is running on port: ${SERVER_PORT}`);
});
