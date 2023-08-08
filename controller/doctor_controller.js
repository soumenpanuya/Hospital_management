const Doctor = require("../model/doctor");


class doctorController{

    static registation = async (req,res)=>{
        try{
            
            const {username, name, password, confirm_password}= req.body;
            if(!username || !name || !password || !confirm_password){
                return res.status(400).json({
                    message : "All field required.."
                })
            };
            if(password != confirm_password){
                return res.status(400).json({
                    message :"password not match.."
                })
            }
            const doctor = await Doctor.findOne({username :username});
            if(doctor){
                return res.status(400).json({
                    message : "username already exiest.."
                });
            }
            const newdoctor = Doctor.create({
                username : username,
                name : name,
                password :password
            });
            return res.status(200).json({
                message : "Doctor Registation Successfull.."
            });

            
        }catch(err){
            console.log(err);
            return res.status(500).json({
                message :" Internal server error.."
            });
        }

    }
}

module.exports = doctorController;