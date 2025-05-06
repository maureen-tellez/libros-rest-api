const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
const port = 5555;

//Database connection
mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true});

const db = mongoose.connection;

db.on("Error", (error) => console.error(error))
db.once("Open", () => console.log("Maravillosa, espectacular conexion"))

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
