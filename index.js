import jsonServer from "json-server";

// setup json server

const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

// use all setup
server.use(middlewares);
server.use(router);

// listen server

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`JSON Server is running at ${PORT}`);
});
