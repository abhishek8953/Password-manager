import CryptoJS from 'crypto-js'


let key=import.meta.env.VITE_API_CIPHER

export function encrypt(data) {
   try {
    let ciphertext = CryptoJS.AES.encrypt(data, key).toString();
    return ciphertext;
    
   } catch (error) {
    console.log(error);
   }
    

}


export function decrypt(cipher){
   try {
    let decryptedBytes = CryptoJS.AES.decrypt(cipher,key);
    let decryptedData = decryptedBytes.toString(CryptoJS.enc.Utf8);
    return decryptedData;

   } catch (error) {
    console.log(error);

   }
    
}

