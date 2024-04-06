import { useNavigate } from 'react-router-dom'
import img from '../assets/3817720.jpg'

export default function Landing() {

    const navigate = useNavigate()
    return (
        <>

            <div className='landing-container'>

                <div className='landing-first'>
                    <h1 className='poppins-regular' >Welcome to our
                    secure <br /> password  
                    manager</h1>
                    <br />
                    <button className='hover-green landing-btn-login' type="button" onClick={(e) => {
                        e.preventDefault();
                        navigate('/login')

                    }}> login </button>

                    <button className='hover-green landing-btn-signup' type="button" onClick={(e) => {
                        e.preventDefault();
                        navigate('/signup')

                    }}> Singnup </button>

                    

                </div>
                <div className='landing-second'>

                    <img className='landing-img' src={img} alt="image" />



                </div>

                

            </div>

        </>
    )
}