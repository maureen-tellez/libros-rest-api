const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 4000;

//Database connection
mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser: true});

const db = mongoose.connection;

db.on("Error", (error) => console.error(error))
db.once("Open", () => console.log("Conexion exitosa"))

//Middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}));

/*
app.get("/", (req, res) => {
    res.send("Hello world");
});
*/

app.use("/libros", require("./routes/librosRoutes"))
app.listen(port, () => console.log("El servidor esta fallando"));
