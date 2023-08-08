const Report = require("../model/c-19_report");
const Patient =require("../model/patient");
const Doctor = require("../model/doctor");

class report{

    static create= async(req,res)=>{
        try{

            const{doctor,patient,status} =req.body;
            if(!doctor || !patient || !status){
                return res.status(400).json({
                    message : "All field required.."
                })
            }
            const Pdoctor = await Doctor.findOne({_id : doctor});
            if(!Pdoctor){
                return res.status(400).json({
                    message: " Doctor not find.."
                })
            }
            const Ppatient = await Patient.findOne({_id : patient});
            if(!Ppatient){
                return res.status(400).json({
                    message: " Patient not find.."
                })
            }
            if(Ppatient.reports.length > 0){
                let id = Ppatient.reports[0];
               await Ppatient.reports.pull(Ppatient.reports[0]);
               await Report.findByIdAndDelete(id);
            }
            
            const newReport = await Report.create({
                doctor : doctor,
                patient: patient,
                status : status
            });

            Ppatient.reports.push(newReport);
            await Ppatient.save();
            return res.status(200).json({
                message : "Report create successfully",
                data : newReport
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