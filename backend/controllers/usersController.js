const User = require("../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const nodemailer=require('nodemailer')

async function signup(req, res) {
    try {
        //get email andd password from the req body
        const { email, password } = req.body;
        
        // console.log({ email, password });
        //Create user with data
        console.log(email, password);
        const hashPassword = bcrypt.hashSync(password, 10);
        //Hash password
        await User.create({ email, password: hashPassword });
        //respond

        res.sendStatus(200);
    } catch (error) {
        console.log(error);
        res.sendStatus(400);
    }
}
async function login(req, res) {
    try {
        //get email and password from req body
        const { email, password } = req.body;
        

        //find the user with requested email
        const user = await User.findOne({ email: email });
        if (!user) return res.sendStatus(401);
        //compare send password with fount user pssword hash
        const passwordMatch = bcrypt.compareSync(password, user.password);
        if (!passwordMatch) return res.sendStatus(401);

        //create token
        const exp = Date.now() + 1000 * 60 * 60 * 24 * 30;  //days 30
        const token = jwt.sign({ sub: user._id, exp }, process.env.SEC);
        //sub is key to save the id in token
        //send cookie
        res.cookie("Authorization", token, {
            expires: new Date(exp),
            httpOnly: true,
            secure:true,
            sameSite: "none"  
           
            
        });
        //send it
        res.sendStatus(200);
    } catch (err) {
        console.log(err);
        res.sendStatus(400);
    }
}
function logout(req, res) {
    res.clearCookie("Authorization",{ httpOnly: true, secure: true });
    res.sendStatus(200);
}
function checkAuth(req, res) {
    try {
        res.sendStatus(200);
    } catch (error) {
        return res.sendStatus(400);
    }
   
}
const forgontPassword=async (req, res) => {
    const { email } = req.body;

    try {
        const user = await User.findOne({ email })
        if (!user) {
            return res.json({ message: "user not register" })
        }

        const token=jwt.sign({id:user._id},process.env.SEC,{expiresIn:"5m"})

        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.USER,
                pass: process.env.PASS,
            }
        });
        let url=process.env.ORIGIN;
        
        var mailOptions = {
            from: 'abhishektiwarirt39@gmail.com',
            to: email,
            subject: 'Reset password',
            text: `${url}/resetpassword/${token}`
        };

        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error);
                res.json({status:false,error})
               
            } else {
                res.json({ status: true, message: "email send" })
            }
        });

    } catch (error) {
        console.log(error);

    }


}
const resetpassword=async(req,res)=>{
    const token=req.params.token;
    const {newPassword}=req.body;


    try {
        const decoded=await jwt.verify(token,process.env.SEC)
        const id=decoded.id;

        const hashPassword=await bcrypt.hash(newPassword,10);
        await User.findByIdAndUpdate({_id:id},{password:hashPassword})
        return res.json({status:true,message:"Updated Password"})
        
    } catch (err) {
      console.log(err);
      return res.json("Invalid token");
    }
}
module.exports = { signup, login, logout, checkAuth ,forgontPassword,resetpassword};
