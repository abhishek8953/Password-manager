const mongoose=require('mongoose')

const passwordSchema=new mongoose.Schema({
    title : {
        type:String,
        required:true,
    },
    body :{
        type:String,
        required:true,
    },

    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
    }
});


const Password=mongoose.model('Password',passwordSchema)

module.exports=Password