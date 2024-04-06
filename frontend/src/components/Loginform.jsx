import React, { useState } from "react"
import authStore from "../stores/authStore"
import { useNavigate,Link} from 'react-router-dom'


export default function LoginForm() {
    const store = authStore()
    const navigate=useNavigate();
    const [loginStatus,setLoginStatus]=useState('');

    const handleLogin=async(e)=>{
       try{ e.preventDefault();
        await store.login();
         //navigate

        navigate('/')   
    }catch{
        setLoginStatus('please enter valid email and password')
        console.log("please enter valid email and password");
    }
}
    
    return (
        <div className="main-login-container">
            
            <div className="login-container">
           
            
            <form onSubmit={handleLogin}>
                     <h1 className="text-login">Login</h1>
                 <div className="input-1">
                 
                 <h6>{loginStatus}</h6>
                 <label htmlFor="email">Email</label>
                 <input placeholder="Enter your Email" onChange={store.updateLoginForm} value={store.loginForm.email} type="email" name="email" />

                 </div>

                 <div className="input-2 ">
                    <label htmlFor="password">Password</label>
                 <input placeholder="Enter your Password" onChange={store.updateLoginForm} value={store.loginForm.password} type="password" name="password" />

                 </div>
                 
                 <button  className="hover" type="submit">Login</button>
                 <button  className="hover" onClick={(e)=>navigate('/signup')} type="button">signup</button>
                 
                 <div className="forget-password" >
                 <h4>Forget Password</h4>  
                 <Link  className="hover"  to='/forgetpassword'> Click here </Link>
                 

                 </div>
                  
             </form>
             
            
            </div>
            
            
        </div>
    )
   
    
}