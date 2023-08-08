const mongoose =require("mongoose");

const schema = new mongoose.Schema({
    username :{
        type : String,
        required : true,
        unique : true
    },
    name : {
        type : String,
        required : true
    },
    ph_no :{
        type :Number,
        required : true
    },
    password :{
        type: String,
        required :true
    },
    email :{
        type : String
    },
    reports : {
      type :  [],
      default : []
    }
},{
    timestamps : true
});

const patientSchema = mongoose.model("Patient",schema);
module.exports = patientSchema ;
