const Password = require('../models/password')
const {encrypt,decrypt}=require('../middlewares/encryptionAndDecription')



const fetchPasswords = async (req, res) => {
    try{
    //find notes
     let passwords = await Password.find({ user: req.user._id })
    //response 
     console.log(passwords);
    res.json({ notes:passwords})

    }catch(err){
        console.log(err);
    }
}

const fetchPassword = async (req, res) => {
    try{
    //get by id
    const passwordId = req.params.id
    const password = await Password.findOne({ _id: passwordId, user: req.user._id })

    res.json({ note: password })
    }catch(err){
        console.log(err);
    }

}

const createPassword = async (req, res) => {
    try{
    //getting data from the body
    let title = req.body.title
    let body = req.body.body
    
    // console.log(title,body);
    title=encrypt(title)
    body=encrypt(body)
    const password = await Password.create({
        title: title,
        body: body,
        user: req.user._id,
    })

    res.json({ note: password })
}catch(err){
    console.log(err);
}

}

const updatePassword = async (req, res) => {
    try{
    //get the if of the url
    const passwordId = req.params.id;
    let title = req.body.title;
    let body = req.body.body;
    
    title=encrypt(title)
    body=encrypt(body)
    await Password.findOneAndUpdate({ _id: passwordId, user: req.user._id }, {
        title: title,
        body: body,
    });
    const password = await Password.findById(passwordId);

    res.json({ note: password })
}catch(err){
    console.log(err);
}

}

const deletePassword = async (req, res) => {
    try{
    const passwordId = req.params.id;

    await Password.deleteOne({ _id: passwordId, user: req.user._id });
    res.json({ success: "record is deleted" })
    }catch(err){
        console.log(err);
    }
}

module.exports = {
    fetchPassword,
    fetchPasswords,
    createPassword,
    updatePassword,
    deletePassword,

}