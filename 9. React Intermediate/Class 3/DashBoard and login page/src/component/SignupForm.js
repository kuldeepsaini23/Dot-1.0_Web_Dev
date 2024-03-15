import React, { useState } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const SignupForm = ({setIsLoggedIn}) => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: ""
  })

  const [accountType, setAccountType] = useState("student");

  const [showPassword, setShowPassword] = useState(false)
  const [createPassword, setCreatePassword] = useState(false)


  function changeHandler(event) {
    setFormData((prev) => (
      {
        ...prev,
        [event.target.name]: event.target.value
      }
    ))
  }

  
  function submitHandler(event){
    event.preventDefault();
    if(formData.password !== formData.confirmPassword){
      toast.error("Password donot match")
      return;
    }
    setIsLoggedIn(true);
    console.log(setIsLoggedIn);
    toast.success("Account Created");
    navigate("/dashboard");
    const accountData = {
      ...formData
    }

    const finalData = {
      ...accountData,
      accountType
    }

    console.log(finalData);

  }

  return (
    <div className="flex flex-col w-full gap-y-4 mt-6">
      {/* Student Instructor tab */}
      <div className='flex bg-richblack-800 p-1 gap-x-1 my-6 rounded-full max-w-max'>
        <button className={`${accountType ==="student" ? "bg-richblack-900 text-richblack-5":"bg-transparent text-richblack-200"} py-2 px-5 rounded-full transition-all duration-200`} onClick={()=> setAccountType("student")}>
          Student
        </button>

        <button className={`${accountType ==="instructor" ?" bg-richblack-900 text-richblack-5":"bg-transparent text-richblack-200"} py-2 px-5 rounded-full transition-all duration-200`} onClick={()=> setAccountType("instructor")}>
          Instructor
        </button>
      </div>

      <form onSubmit={submitHandler} className="flex flex-col w-full gap-y-4 mt-6">
        {/* Fist name and Last Name */}
        <div className='flex gap-x-4 mt-[10px]'>
          <label className='w-full'>
            <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>First Name
            <sup className='text-pink-200'>*</sup></p>

            <input required type="text" name="firstName" onChange={changeHandler} placeholder="Enter First Name" value={formData.firstName}
             className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] border-b-[0.001rem] border-richblack-5' />
          </label>

          <label className='w-full'>
            <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Last Name
            <sup className='text-pink-200'>*</sup></p>

            <input required type="text" name="lastName" onChange={changeHandler} placeholder="Enter Last Name" value={formData.lastName} 
               className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] border-b-[0.001rem] border-richblack-5'
            />
          </label>
        </div>

        {/* Email */}
        <label className='w-full mt-[10px]'>
          <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Email
          <sup className='text-pink-200'> *</sup></p>

          <input required type="email" name="email" onChange={changeHandler} placeholder="Enter Your Email Address" value={formData.email}
           className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] border-b-[0.001rem] border-richblack-5' />
        </label>

        {/*Confirm Password and Password  */}
        <div className='flex gap-x-4 mt-[10px]'>
          <label className='w-full relative'>
            <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Create Password
            <sup className='text-pink-200'> *</sup></p>

            <input required type={showPassword ? ("text") : ("password")} value={formData.password} onChange={changeHandler} placeholder="Enter Password" name='password' 
               className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] border-b-[0.001rem] border-richblack-5'
            />


            <span onClick={() => setShowPassword((prev) => !prev)}
             className="absolute right-3 top-[38px] cursor-pointer">
              {showPassword ? (<AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF"/>) : (<AiOutlineEye fontSize={24} fill="#AFB2BF"/>)}
            </span>
          </label>


          <label className='w-full relative'>
            <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Confirm Password<sup className='text-pink-200'>           *</sup></p>

            <input required type={createPassword ? ("text") : ("password")} value={formData.confirmPassword} onChange={changeHandler} placeholder="Confirm Password" name='confirmPassword' 
               className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] border-b-[0.001rem] border-richblack-5'
            />


            <span onClick={() => setCreatePassword((prev) => !prev)}
            className="absolute right-3 top-[38px] cursor-pointer">
              {createPassword ? (<AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF"/>) : (<AiOutlineEye fontSize={24} fill="#AFB2BF"/>)}
            </span>
          </label>

        </div>

        <button className='bg-yellow-50 rounded-[8px] font-medium text-black px-[12px] py-[8px] mt-6'>Create Account</button>

      </form>

    </div>
  );
};

export default SignupForm;
