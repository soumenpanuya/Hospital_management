const passport =require("passport");
const jwtstrategy = require("passport-jwt").Strategy;
const Extractjwt =require("passport-jwt").ExtractJwt;
const env =require("./enviroment");
const Doctor =require("../model/doctor");

let opts={
    jwtFromRequest:  Extractjwt.fromAuthHeaderAsBearerToken(),
    secretOrKey : env.jwtsecret
}

passport.use(new jwtstrategy(opts,async (jwtpayload,done)=>{
    try{
        const username = jwtpayload.username;
        const doctor =await Doctor.findOne({username: username});
        if(!doctor){
            return done(null,false);
        }
        return done(null,doctor);

    }catch(err){
        console.log(err);
        return res.status(500).json({
            message : "Internal server error.."
        })
    }
}));

module.exports =passport;