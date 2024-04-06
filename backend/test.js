require('dotenv').config();
const CryptoJS = require('crypto-js')




// // Encrypt a string using CryptoJS
// function encryptString(text, key) {
//     const encrypted = CryptoJS.AES.encrypt(text, key).toString();
//     return encrypted;
// }

// // Decrypt a string using CryptoJS
// function decryptString(encryptedText, key) {
//     const decrypted = CryptoJS.AES.decrypt(encryptedText, key)
//     .toString(CryptoJS.enc.Utf8);
//     return decrypted;
// }

// // Example usage
// const text = "Hello, world!";
// const key = process.env.MY_KEY;



// const encryptedText = encryptString(text, key);
// console.log("Encrypted:", encryptedText);

// const decryptedText = decryptString(encryptedText, key);
// console.log("Decrypted:", decryptedText);



// ////encript password before save in the db




// const User = mongoose.model('User', userSchema)


//test ciphers
// Step 2: Generate a strong key (256-bit)

// let key= process.env.CIPHER


// console.log("Decrypted Data:", decryptedData);