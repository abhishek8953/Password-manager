import { useState } from "react";
import authStore from "../stores/authStore";
import { useNavigate } from 'react-router-dom'


export default function SignupForm() {
    const store = authStore();
    const [error, setError] = useState('Please enter your email');
    const navigate = useNavigate();



    const handleSignup = async (e) => {
        try {
            e.preventDefault()
            await store.signup();

            navigate('/login')
        } catch (err) {
            setError("Email already Exist")
            console.log(err);
        }

    };

    return (
        <div>
            {/* <h5>{error}</h5>
            <form onSubmit={handleSignup}>
                <input onChange={store.updateSignupForm} value={store.signupForm.email} type="email" name="email" />
                <input onChange={store.updateSignupForm} value={store.signupForm.password} type="password" name="password" />

                <button type="submit">Signup</button>
            </form> */}

            <div className="main-login-container">

                <div className="login-container">


                    <form onSubmit={handleSignup}>
                        <h1 >Signup</h1>
                        <div className="input-1">
                            <h5>{error}</h5>
                            <label htmlFor="email">Email</label>
                            <input placeholder="Enter your Email" onChange={store.updateSignupForm} value={store.signupForm.email} type="email" name="email" />

                        </div>

                        <div className="input-2 ">
                            <label htmlFor="password">Password</label>
                            <input placeholder="Enter your password" onChange={store.updateSignupForm} value={store.signupForm.password} type="password" name="password" />

                        </div>

                        <button className="hover" type="submit">Signup</button>
                        <button className="hover" type="submit" onClick={(e)=>{
                            e.preventDefault()
                            navigate("/login")
                        }}>login</button>
                        


                    </form>


                </div>


            </div>




        </div>
    )
}