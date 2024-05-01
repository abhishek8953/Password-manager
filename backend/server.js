const express = require("express");
const dotenv = require("dotenv").config();
const connectToDb = require("./config/connectToDb");
const passwordController = require("./controllers/passwordController");
const cors = require("cors");
const usersController = require("./controllers/usersController");
const cookie = require("cookie-parser");
const cookieParser = require("cookie-parser");
const requireAuth = require("./middlewares/requireAuth");
const nodemailer = require('nodemailer');
const jwt = require("jsonwebtoken");
const bcrypt = require('bcryptjs')
const {encrypt,decrypt}=require('./middlewares/encryptionAndDecription');




const app = express();
connectToDb();
//congigure to use json
app.use(express.json());
app.use(cookieParser());
app.use(
    cors({
      
        origin: process.env.ORIGIN,
        credentials: true,
    })
);





//destructuring all functions from the notes controller
const { fetchPassword, fetchPasswords, updatePassword, deletePassword, createPassword } = passwordController;
const { checkAuth, forgontPassword, resetpassword } = usersController;

app.post("/signup", usersController.signup);
app.post("/login", usersController.login);
app.get("/logout", usersController.logout);

app.get("/notes", requireAuth, fetchPasswords);
app.get("/notes/:id", requireAuth, fetchPassword);
app.post("/notes", requireAuth, createPassword);
app.get("/check-auth", requireAuth, checkAuth);
app.put("/notes/:id", requireAuth, updatePassword);
app.delete("/notes/:id", requireAuth, deletePassword);
app.post('/forgot-password', forgontPassword)
app.post('/resetpassword/:token', resetpassword)

const port = process.env.PORT;

app.listen(port, () => {
    console.log(`Server connected succefully port ${port}`);
});




// let data = { name: "abhishek", age: "24" };

// let p=encrypt(JSON.stringify(data));
// console.log(p);

// console.log(JSON.parse(decrypt(p)));
