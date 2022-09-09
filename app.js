const express = require("express");
const exphbs = require("express-handlebars");
const hbs = exphbs.create({});

const bodyParser = require("body-parser");
const mysql = require("mysql2");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 3001;

// Parsing middleware
// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json);
app.use(express.static("public"));

// Templating Engine
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

//Router
app.get("", (req, res) => {
  res.render("home");
});

app.listen(port, () => console.log(`listening on port ${port}`));
