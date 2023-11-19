const mongoose = require("mongoose");

const SertifikatSchema = new mongoose.Schema({
    nameSertifikat: {
        require: true,
        type: String
    },
    link: {
        require: true,
        type: String
    },
    imageSertifikat: {
        require: false,
        type: String
    }
})

const sertifikat = mongoose.model('sertifikat',SertifikatSchema)

module.exports = sertifikat