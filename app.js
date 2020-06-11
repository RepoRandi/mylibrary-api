const express = require("express");
require("dotenv").config();
const app = express();
const bodyParser = require("body-parser");
const morgan = require("morgan");
const connection = require("./src/helpers/mysql");
const routes = require("./src/routes/index");


connection.connect(function (error) {
    if (error) throw error;
    console.log("Database Has Conenected!");
});

app.use(morgan("dev"));

app.use(
    bodyParser.urlencoded({
        extended: true,
    })
);
app.use(bodyParser.json());

app.use("/", routes);

app.listen(3000, function () {
    console.log("Library Apps Runing At Port:3000!");
});