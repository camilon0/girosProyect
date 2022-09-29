const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router(`${__dirname}/data/db.json`);

const port = process.env.PORT || 3000;

server.use(router);
server.listen(port, () => {
  console.log("JSON Server is running");
});
