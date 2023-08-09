const Doctor = require("../model/doctor");
const jwt =require("jsonwebtoken");
const env =require("../config/enviroment");


class doctorController{
// ----------------doctors registation------------//
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
            const newdoctor =await Doctor.create({
                username : username,
                name : name,
                password : password
            });
            return res.status(200).json({
                message : "Doctor Registation Successfull..",
                data : newdoctor
            });

            
        }catch(err){
            console.log(err);
            return res.status(500).json({
                message :" Internal server error..."
            });
        }

    }
    // ------------doctors login-------------//
    static login = async (req,res)=>{
        try{
            const {username, password} =req.body;
            if(!username || !password){
                return res.status(400).json({
                    message : "All field required.."
                })
            }
            const doctor =await Doctor.findOne({username :username});
            if(!doctor){
                return res.status(400).json({
                    message : "username / password not match.."
                })
            }
            if(doctor.password!=password){
                return res.status(400).json({
                    message : "username / password not match.."
                })
            }
            return res.status(200).json({
                message : "Doctor found..",
                token : jwt.sign({username:username},env.jwtsecret,{expiresIn : 1000 * 60 *60})
            })


        }catch(err){
            console.log(err);
            return res.status(500).json({
                message :" Internal server error.."
            });
        }
    }
}

module.exports = doctorController;