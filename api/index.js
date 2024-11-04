// api/index.js
const jsonServer = require("json-server");
const server = jsonServer.create();
const dbPath = process.env.DB_PATH || "db.json"; // Fallback to 'db.json'
const router = jsonServer.router(path.join(__dirname, "..", dbPath));
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);

server.listen(3000, () => {
  console.log("JSON Server is running");
});
