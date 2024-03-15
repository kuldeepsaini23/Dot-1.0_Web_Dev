import React from 'react'
import Template from '../component/Template';
import loginImg from "../assets/login.png";

const Login = ({setIsLoggedIn}) => {
  return (
    <Template 
        title="Welcome Back"
        desc1 = "Build skills for today, tommorrow and beyond."
        desc2 = "Education to future-proof your carrer."
        image={loginImg}
        formtype = "login"
        setIsLoggedIn={setIsLoggedIn}
    />
  )
}

export default Login