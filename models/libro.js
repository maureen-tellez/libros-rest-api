const mongoose = require("mongoose")

const libroSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    autor: {
        type: String,
        required: true
    },
    isbn: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model("Libro", libroSchema)