const mongoose =require("mongoose");

const schema = new mongoose.Schema(
    {
       CreatedByDoctor :{
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
            enum: ["Negative", "Travelled-Quarantine", "Symptoms-Quarantine", "Positive-Admit"]
       },
       Date : {
        type : Date,
        default: Date.now
       }
    },{
        timestamps: true
    }
);

const report = mongoose.model("c-19",schema);
module.exports =report;