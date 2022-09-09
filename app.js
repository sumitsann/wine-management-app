const express = require("express");
const exphbs = require("express-handlebars");
const bodyParser = require("body-parser");

const app = express();

const port = process.env.PORT || 3001;

app.listen(port, () => console.log(`listening on port ${port}`));
