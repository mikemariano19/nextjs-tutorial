const jsonServer = require("json-server")
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middleware = jsonServer.defaults();

server.use(middleware);

server.use((req, res, next) => {
    console.log("Request recieved");
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow_Methods",
        "GET, POST, PUT, DELETE, PATCH, OPTIONS"
    );
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
});

server.use(router);
server.listen(3001, () => {
    console.log("JSON Server is running");
})