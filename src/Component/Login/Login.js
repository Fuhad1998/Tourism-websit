import React from "react";
import './Login.css'
import useAuth from "../Hooks/UseAuth";
import { useHistory, useLocation } from "react-router";



const Login = () => {
  const {signInUsingGoogle} = useAuth();
  const location = useLocation();
  const history = useHistory();
  const redirect_uri = location.state?.from || "/homes";
  
  const handelGoogleLogin = () =>{
    signInUsingGoogle()
    .then(result =>{
    history.push(redirect_uri)
    })
    
    }


const handleLoginForm = (e) =>{
  e.preventDefault()
}




  return (
    <div className=" login-form m-5">
      <form onSubmit={handleLoginForm}>
        
        <input type="email" name="" id="" placeholder="Write your email" />
        <br />
        <input type="password" name="" id="" placeholder="Write your password" />
        <br />
        <input className="submit-inp" type="submit" value="submit" />
        <br />
        <div>----------or----------</div>
      <button onClick={handelGoogleLogin} className="google-login">Google Sign In</button>
      </form>
      
    </div>
  );
};

export default Login;
