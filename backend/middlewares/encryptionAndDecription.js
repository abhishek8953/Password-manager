const CryptoJS = require('crypto-js')

let key=process.env.CIPHER;

function encrypt(data) {

    let ciphertext = CryptoJS.AES.encrypt(data, key).toString();
    return ciphertext;

}


function decrypt(cipher){

    let decryptedBytes = CryptoJS.AES.decrypt(cipher,key);
    let decryptedData = decryptedBytes.toString(CryptoJS.enc.Utf8);
    return decryptedData;

}

module.exports={encrypt,decrypt}