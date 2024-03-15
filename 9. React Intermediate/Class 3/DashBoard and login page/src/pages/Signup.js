import React from 'react'
import Template from '../component/Template';
import signupImg from "../assets/signup.png"


const Signup = ({setIsLoggedIn}) => {
  return (

      <Template
        title="Join the millions learining to code with StudyNotion for Free"
        desc1 = "Build skills for today, tommorrow and beyond."
        desc2 = "Education to future-proof your carrer."
        image={signupImg}
        formtype = "signup"
        setIsLoggedIn={setIsLoggedIn}
      />
  
  )
}

export default Signup