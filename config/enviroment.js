

const development ={
    name: "development",
    port : 1002,
    db : "mongodb://127.0.0.1:27017/Hospital"
}



const production ={
    name: "production",
    port : process.env.port,
    db : process.env.db
}


module.exports = eval(process.env.ev) == undefined ? development : eval(process.env.ev)