const Patient = require("../model/patient");


class patientController{

    static registation = async (req,res)=>{
        try{
            
            const {phone, name}= req.body;
            if(!phone || !name ){
                return res.status(400).json({
                    message : "All field required.."
                })
            };
            const patient = await Patient.findOne({phone :phone});
            if(patient){
                return res.status(400).json({
                    message : "Patient already exiest..",
                    data :patient
                });
            }
            const newpatient =await Patient.create({
                phone : phone,
                name : name
            });
            return res.status(200).json({
                message : "patient Registation Successfull..",
                data : newpatient
            });

            
        }catch(err){
            console.log(err);
            return res.status(500).json({
                message :" Internal server error.."
            });
        }

    }
}

module.exports = patientController;