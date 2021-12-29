const http = require("http");
const express = require("express");
require("dotenv").config();
const cors = require("cors");
const path = require("path");
const projectRoute = require("./server/routes/projectRouter");
const userRouter = require("./server/routes/userRouter");
require("./server/db/connectDB");

const app = express();

//Midlewares
app.use(express.json());
app.use(
    express.urlencoded({
        extended: true,
    })
);

app.use(cors());
//Routes
app.use("/api", projectRoute);
app.use("/api", userRouter);

/**Static folder */
app.use(express.static(path.join(__dirname, "client/build")));
app.use("/public", express.static(path.join(__dirname, "/client")));
app.get("/*", (_, res) => {
    res.sendFile(path.join(__dirname, "/client/build/index.html"));
});
//app.use("/uploads", express.static(path.join(__dirname, "/uploads")));
const PORT = process.env.PORT || 6500;
const server = http.createServer(app);

server.listen(PORT, () => {
    console.log("connected on port " + PORT);
});