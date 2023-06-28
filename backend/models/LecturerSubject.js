const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const LectureMaterial = new Schema({

    LecMaterialID : {
        type : String,
        required : true
    },
    SupportedLinks : {
        type : String
    },

    Message : {
        type : String,
        required : true
    },

    LectureMaterial : {
        type : String,
       
    }

})

const Material = mongoose.model("Lecture_Material",LectureMaterial);

module.exports =  Material;