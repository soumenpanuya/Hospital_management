const mongoose =require("mongoose");

const schema = new mongoose.Schema({
    phone :{
        type : Number,
        required : true,
        unique : true
    },
    name : {
        type : String,
        required : true
    }, 
    reports :[{
        type : mongoose.Schema.Types.ObjectId,
        ref : "c-19"
    }]
},{
    timestamps : true
});

const patientSchema = mongoose.model("Patient",schema);
module.exports = patientSchema ;
