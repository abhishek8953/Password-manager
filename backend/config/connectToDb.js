const mongoose=require('mongoose')


async function connectToDb(){
    try {
        const con=await mongoose.connect(process.env.DATABASE)
        console.log("DB connected");
    } catch (error) {
        console.log(error,"Erron in DB");
    }
   
}

module.exports=connectToDb