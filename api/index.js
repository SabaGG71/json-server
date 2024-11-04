const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json"); // path to your JSON file
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);

module.exports = server;
