global.config = require(process.env.NODE_ENV === "production" ? "./config-prod.json" : "./config-dev.json")
const express = require("express");
const cors = require("cors");
const fileUpload = require("express-fileupload");
const vacationsControllers = require("./controllers-layer/vacations-controllers");
const authControllers = require("./controllers-layer/auth-controllers");
const usersControllers = require("./controllers-layer/user-controllers");
const followsControllers = require("./controllers-layer/follows-controllers");
const socketHelper = require("./helpers/socket-helper");
const path = require("path");

const server = express();
server.use(cors());
server.use(express.json());
server.use(fileUpload());
server.use(express.static(path.join(__dirname, "./frontend")));


server.use("/api/vacations", vacationsControllers);
server.use("/api/auth", authControllers);
server.use("/api/users", usersControllers);
server.use("/api/follows", followsControllers);

server.use("*", (request, response) => {
    response.sendFile(path.join(__dirname, "./frontend/index.html"))
});

const port = process.env.PORT || 3001;

const expressListener = server.listen(port, () => console.log("Listening...."));
socketHelper.init(expressListener);