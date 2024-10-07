const jsonServer = require("json-server");
const auth = require("json-server-auth");

const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(auth);
server.use("/api", router);

server.listen(process.env.PORT || 3000, () => {
  console.log(
    "JSON Server is running: " + (process.env.PORT ? process.env.PORT : 3000)
  );
});
