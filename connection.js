const mongoose = require("mongoose");
const db_url = process.env.ATLAS_DB_URL
let connect = async function (){
    try{
        let res = await mongoose.connect(db_url);
        //console.log(res)
        console.log("connected to database")
    }
    catch(error){
        console.log(error)
    }
}

module.exports = connect