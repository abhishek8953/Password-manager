import axios from "axios";
import { useState } from "react"
import { useNavigate } from "react-router-dom";


export default function ForgetPassword(){
    const [isUser,setIsUser]=useState('');
    const [email,setEmail]=useState('');
    const navigate=useNavigate();

    const handleSubmit=(e)=>{
        e.preventDefault();
        let url=import.meta.env.VITE_API_HOST
        axios.post(`${url}/forgot-password`,{
            email
        }).then(res=>{
            if(res.data.status){
                alert('check your email')
                setIsUser(res.data.message)
                navigate('/login')
            }
            if(res.data.status==200){
                setIsUser("network error")
            }
            if(res.data.message){
                setIsUser(res.data.message)
            }
        }).catch(err=>{
            console.log(err);
            
        })
    }
    return(
        <div className="main-login-container ">
             <form  className="child-container input-2" onSubmit={handleSubmit}>
                <h2 className="main-forgot-text" >Forgot password</h2>
                  <h4>{isUser}</h4>
                  <br />
                 <label htmlFor="email">Enter your email:</label><br />
                <input type="email" autoComplete="off" placeholder="Email"  onChange={(e)=>
                    setEmail(e.target.value)
                     }/>
                     <br />
                <button className="hover-green forget-btn" type="submit">Send</button>
            </form>
        </div>

    ) 
}