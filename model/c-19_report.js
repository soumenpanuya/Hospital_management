const mongoose =require("mongoose");

const schema = new mongoose.Schema(
    {
       doctor :{
            type : mongoose.Schema.Types.ObjectId,
            ref : "Doctor",
            required :true
       },
       patient:{
            type : mongoose.Schema.Types.ObjectId,
            ref : "Patient" ,
            required : true
       },
       status:{
            type :String,
            required :true,
            enum: ["Negetive", "Travelled-Quarantine", "Symptoms-Quarantine", "Positive-Admit"]
       },
       date : {
        type : Date,
        default: Date.now
       }
    },{
        timestamps: true
    }
);

const report = mongoose.model("c-19",schema);
module.exports =report;