const mongoose = require('mongoose');

//defines the structure of the constellation model in the mongodb database

const constellationschema = new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId, ref:"User",required:true
    },
    points:[{
        x:Number,y:Number
    }],
    name:{
        type:String,required:true
    },
    meaning:String,
    story:String,
});

module.exports = mongoose.model("Constellation",constellationschema)