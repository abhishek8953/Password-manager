import axios from "axios";
import { useState } from "react"
import { useNavigate, useParams } from "react-router-dom";

export default function ResetPassword(){
    const [newPassword,setNewPassword]=useState('');
    const navigate=useNavigate();
    const {token}=useParams(); //it will give the parameter send by the backend


    const handleSubmit=(e)=>{  
        let url=import.meta.env.VITE_API_HOST
                                       
        e.preventDefault();                       //sending new password in the reqbody
        axios.post(`${url}/resetpassword/`+token,{newPassword})
        .then(res=>{
            if(res.data.status){
                alert("password change successfully")
                navigate('/login')
            }
            
            
        })
    }
   


    return(
        <div className="reset-pass">

            
           <form onSubmit={handleSubmit}>
            <label htmlFor="newPassword">New password</label>
            <input type="text" placeholder="Enter your new password" onChange={(e)=>setNewPassword(e.target.value)}/>
            <button type="submit">Save</button>
           </form>

        </div>

        
        
    )
}