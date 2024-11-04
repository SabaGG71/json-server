// functions/api.js
const jsonServer = require("json-server");
const path = require("path");
const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, "..", "db.json"));
const middlewares = jsonServer.defaults();

// Set up JSON Server middleware
server.use(middlewares);
server.use(router);

module.exports.handler = async (event, context) => {
  const handler = server;
  return new Promise((resolve, reject) => {
    const response = {
      statusCode: 200,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message: "Request received" }),
    };

    handler(event, context, (error) => {
      if (error) {
        reject({
          statusCode: 500,
          body: JSON.stringify({ error: error.message }),
        });
      } else {
        resolve(response);
      }
    });
  });
};
