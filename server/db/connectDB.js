const mongoose = require("mongoose");

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0-acerom.ypzqx.mongodb.net/portfolio-db`;

mongoose
    .connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,

    })
    .then(() => console.log("Connexion à MongoDB réussie !"))
    .catch(() => console.log("Connexion à MongoDB échouée !"));