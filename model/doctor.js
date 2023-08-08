const mongoose =require("mongoose");

const schema = new mongoose.Schema(
    {
        username : {
            type: String,
            required : true,
            unique : true
        },
        name : {
            type : String,
            required : true
        },
        password :{
            type :String,
            required : true
        }
    },{
        timestamps: true
    }
);

const doctorSchema = mongoose.model("Doctor",schema);
module.exports =doctorSchema;