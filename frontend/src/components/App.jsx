import LoginPage from "../pages/LoginPage";
import NotesPage from "../pages/NotesPage";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import RequireAuth from "./RequireAuth";
import SignupPage from "../pages/SignupPage";
import LogoutPage from "../pages/LogoutPage";
import ForgetPasswordPage from "../pages/ForgetPasswordPage";
import ResetPassword from "./ResetPassword";
import Landing from "./Landing";



function App() {
  return (
    <>
      <BrowserRouter>
      <div className="nav-container "> 
      <ul>
          <li >
            <Link className="hover2" style={{textDecoration:'none',color:"white"}} to="/">Home</Link>
          </li>
          <li>
          <h4 className='made-with-love'>made with<span>&#x2764;</span> </h4>
          </li>
          {/* <li>
            <Link className="hover2" style={{textDecoration:'none'}} to="/login">login</Link>
          </li>

          <li>
            <Link className="hover2" style={{textDecoration:'none'}} to="/signup">Signup</Link>
          </li>
          <li>
            <Link className="hover2" style={{textDecoration:'none'}} to="/logout">logout</Link>
          </li>
          <li>
            <Link className="hover2" style={{textDecoration:'none'}} to="/forgetpassword">forget</Link>
          </li> */}
          
        </ul>

      </div>
        <div>
        <Routes>
        <Route  path="/signup" element={<SignupPage/>} />
          <Route index path="/" element={<RequireAuth> <NotesPage /> </RequireAuth>} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/resetpassword/:token" element={<ResetPassword/>}/>
          <Route path="/logout" element={<LogoutPage/>}/>
          <Route path="/forgetpassword" element={<ForgetPasswordPage/>}/>
          <Route path="/landing" element={<Landing/>} />
          
        </Routes>
        </div>
        
      </BrowserRouter>

    </>
  );
}

export default App;
