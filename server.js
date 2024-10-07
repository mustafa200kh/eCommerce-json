const jsonServer = require("json-server");
const auth = require("json-server-auth");

const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

// /!\ Bind the router db to the app
app.db = router.db;

// You must apply the auth middleware before the router
app.use(auth);
app.use(router);

server.listen(process.env.PORT || 3000, () => {
  console.log(
    "JSON Server is running: " + (process.env.PORT ? process.env.PORT : 3000)
  );
});
