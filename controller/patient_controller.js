const Patient = require("../model/patient");


class patientController{

    static registation = async (req,res)=>{
        try{
            
            const {username, name, ph_no, email, password, confirm_password}= req.body;
            if(!username || !name || !ph_no || !password || !confirm_password){
                return res.status(400).json({
                    message : "All field required.."
                })
            };
            if(password != confirm_password){
                return res.status(400).json({
                    message :"password not match.."
                })
            }
            const patient = await Patient.findOne({username :username});
            if(patient){
                return res.status(400).json({
                    message : "username already exiest.."
                });
            }
            const newpatient = Patient.create({
                username : username,
                name : name,
                ph_no :ph_no,
                email :email,
                password :password
            });
            return res.status(200).json({
                message : "patient Registation Successfull.."
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