const express = require("express");
const cors = require("cors");
require("dotenv").config();

const { APIPORT } = process.env;

const app = express();
app.use(express.json());
app.use(cors());


app.use("/auth", require("./routes/auth"));

app.use("/dashboard", require("./routes/dashboard"));


app.listen( APIPORT , ()=> console.log(`Server running on port ${APIPORT}`));