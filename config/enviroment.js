

const development ={
    name: "development",
    port : 1002,
    db : "mongodb://127.0.0.1:27017/Hospital",
    jwtsecret : "secret"
}



const production ={
    name: "production",
    port : process.env.port,
    db : process.env.db,
    jwtsecret : process.env.jwtsecret
}


module.exports = eval(process.env.ev) == undefined ? development : eval(process.env.ev)