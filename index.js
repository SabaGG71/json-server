// index.js
const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json"); // Points to your db.json file
const middlewares = jsonServer.defaults();
const PORT = process.env.PORT || 3000; // Use PORT environment variable or default to 3000

// Use default middlewares (logger, static, cors, etc.)
server.use(middlewares);

// Routes
server.use(router);

// Start server
server.listen(PORT, () => {
  console.log(`JSON Server is running on port ${PORT}`);
});
