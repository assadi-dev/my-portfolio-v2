const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();

const port = process.env.PORT || 7200;

const path = require("path");
const { sendMail } = require("./emailController");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const corsOptions = {
  origin: "https://assadi-portfolio.herokuapp.com",
  credentials: true,
  allowedHeaders: ["sessionId", "Content-Type", "Accept", "Authorization"],
  exposedHeaders: ["sessionId"],
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  preflightContinue: false,
};

app.use(cors(corsOptions));
app.use(express.static("build"));

//Routes
app.post("/sendmail", sendMail);

app.get("/*", (_, res) => {
  res.sendFile(path.join(__dirname, "build/index.html"));
});

// Server Listen
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
