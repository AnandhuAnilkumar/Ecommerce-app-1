import React, { useState } from 'react'
import loginSignupImage from "../assets/login13.jfif"
import { BiShow, BiHide } from "react-icons/bi";
import { Link } from 'react-router-dom';

const Signup = () => {
    const [showPassword,setShowPassword] = useState(false)
    const [showConfirmPassword,setShowConfirmPassword] = useState(false)
    const handleShowPassword = ()=> {
        setShowPassword(preve => !preve)
    }
    const handleShowConfirmPassword = ()=> {
        setShowConfirmPassword(preve => !preve)
    }
  return (
    <div className='p-3 md:p-4'>
        <div className='w-full max-w-sm bg-white m-auto flex  flex-col p-4'>
            {/* <h1 className='text-center text-2xl font-bold'>Sign up</h1> */}
            <div className='w-20 overflow-hidden rounded-full drop-shadow-md shadow-md m-auto'>
                <img src={loginSignupImage} className='w-full'/>
            </div>

            <form className='w-full py-3 flex flex-col'>
                <label htmlFor='firstName' >First Name</label>
                <input type={"text"} id="firstName" name='firstName' className='mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded focus-within:outline-green-600'/>

                <label htmlFor='lastName'>Last Name</label>
                <input type={"text"} id="lastName" name='lastName' className='mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded focus-within:outline-green-600'/>

                <label htmlFor='email'>Email</label>
                <input type={"email"} id="email" name='email' className='mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded focus-within:outline-green-600'/>

                <label htmlFor='password'>Password</label>
                <div className='flex px-2 py-1  bg-slate-200 rounded mt-1 mb-2 focus-within:outline focus-within:outline-green-600'>
                    <input type={showPassword ? "text":"password"} id="password" name='password' className=' w-full bg-slate-200  rounded border-none outline-none'/>
                    <span className='flex text-xl cursor-pointer' onClick={handleShowPassword}>{showPassword?<BiShow />:<BiHide />}</span>
                </div>

                <label htmlFor='confirmpassword'>Confirm Password</label>
                <div className='flex px-2 py-1  bg-slate-200 rounded mt-1 mb-2 focus-within:outline focus-within:outline-green-600'>
                    <input type={showConfirmPassword ? "text":"password"} id="confirmpassword" name='confirmpassword' className=' w-full bg-slate-200  rounded border-none outline-none'/>
                    <span className='flex text-xl cursor-pointer' onClick={handleShowConfirmPassword}>{showConfirmPassword?<BiShow />:<BiHide />}</span>
                </div>

                <button className='w-full max-w-[150px] m-auto bg-green-500 hover:bg-green-600 cursor-pointer text-white text-xl font-medium text-center py-1 rounded-full mt-4'> Sign up </button>

            </form>
            <p className='text-left text-sm mt-2'>Already have an account ? <Link to={"login"} className='text-green-700 underline'>Login</Link> </p>

        </div>
    </div>
  )
}

export default Signup