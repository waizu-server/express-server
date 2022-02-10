const express = require("express");
const morgan = require("morgan");

const app = express();
const port = 80;
const host = "0.0.0.0";

app.use(morgan('common'));

app.use('/', express.static('.'));

app.listen(port, host, () => console.log("Se"));
