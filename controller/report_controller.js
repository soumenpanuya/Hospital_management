const Report = require("../model/c-19_report");
const Patient =require("../model/patient");
const Doctor = require("../model/doctor");

class report{
    // --------------create new report----------//
    static create= async(req,res)=>{
        try{
            const patientId =req.params.id;
            const patient = await Patient.findById(patientId);
            if(!patient){
                return res.status(400).json({
                    message: " Patient not found.."
                })
            }
            const{doctorid,status} =req.body;
            if(!doctorid || !status){
                return res.status(400).json({
                    message : "All field required.."
                })
            }
            const doctor = await Doctor.findById(doctorid);
            if(!doctor){
                return res.status(400).json({
                    message: " Doctor not found.."
                })
            }
              
            const newReport = await Report.create({
                CreatedByDoctor : doctorid,
                patient: patientId,
                status : status
            });

            patient.reports.push(newReport);
            await patient.save();
            return res.status(200).json({
                message : "Report create successfully",
                data : patient
            })

        }catch(err){
            console.log(err);
            return res.status(500).json({
                message : "Internal server error.."
            })
        }


    }
    // -----------check all report status--------------//
    static status =async(req,res)=>{
        try{
            const status =req.params.status;

            if (status == "Negative" || status == "Positive" || status == "Symptoms-Quarantine" || status == "Positive-Admit"){
                const report = await Report.find({status: status})
                
                if(report.length == 0){
                    return res.status(200).json({
                        message : "No result found... "
                    }) 
                }
                return res.status(200).json({
                    message : "Result found..",
                    data : report
                })
            }else{
                return res.status(400).json({
                    message : "This is not a status type.. please enter.... Negetive or Travelled-Quarantine or Symptoms-Quarantine or Positive-Admit "
                })
            }
            

        }catch(err){
            console.log(err);
            return res.status(500).json({
                message : "Internal server error.."
            })
        }
    }
    // ----------show all report-----------//
    static allReport =async (req,res)=>{
        try{
            const patientId = req.params.id;
            const patient =await Patient.findById(patientId)
            .sort("-createdAt")
            .populate("reports");
            if(!patient){
                return res.status(400).json({
                    message : "Patient not found.."
                })
            }
            return res.status(200).json({
                message : "Patient  found..",
                data :  patient
            })


        }catch(err){
            console.log(err);
            return res.status(500).json({
                message : "Internal server error.."
            })
        }
    }


}

module.exports =report;