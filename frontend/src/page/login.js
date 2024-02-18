import React, { useState } from "react";
import loginSignupImage from "../assets/login13.jfif";
import { BiShow, BiHide } from "react-icons/bi";
import { Link } from "react-router-dom";

const Login = () => {

  const [showPassword, setShowPassword] = useState(false);
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  console.log(data);
  const handleShowPassword = () => {
    setShowPassword((preve) => !preve);
  };
  const handleOnChange = (e) => {
    const {name,value} = e.target
    setData((preve)=>{
        return{
            ...preve,
            [name] : value
        }
    })
  }

  const handleSubmit = (e)=>{
    e.preventDefault()
    const{email,password} = data
    if(email && password) {
            alert("successfull")
    }
    else {
        alert("Fields cannot be empty")
    }
  }


  return (
    <div className="p-3 md:p-4">
      <div className="w-full max-w-sm bg-white m-auto flex  flex-col p-4">
        {/* <h1 className='text-center text-2xl font-bold'>Sign up</h1> */}
        <div className="w-20 overflow-hidden rounded-full drop-shadow-md shadow-md m-auto">
          <img src={loginSignupImage} className="w-full" />
        </div>

        <form className="w-full py-3 flex flex-col" onSubmit={handleSubmit}>

          <label htmlFor="email">Email</label>
          <input
            type={"email"}
            id="email"
            name="email"
            className="mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded focus-within:outline-green-600"
            value={data.email}
            onChange={handleOnChange}
          />

          <label htmlFor="password">Password</label>
          <div className="flex px-2 py-1  bg-slate-200 rounded mt-1 mb-2 focus-within:outline focus-within:outline-green-600">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              className=" w-full bg-slate-200  rounded border-none outline-none"
              value={data.password}
              onChange={handleOnChange}
            />
            <span
              className="flex text-xl cursor-pointer"
              onClick={handleShowPassword}
            >
              {showPassword ? <BiShow /> : <BiHide />}
            </span>
          </div>

          <button className="w-full max-w-[150px] m-auto bg-green-500 hover:bg-green-600 cursor-pointer text-white text-xl font-medium text-center py-1 rounded-full mt-4">
            {" "}
            Log in{" "}
          </button>
        </form>
        <p className="text-left text-sm mt-2">
          Don't have an account ?{" "}
          <Link to={"/signup"} className="text-green-700 underline">
            Sign Up
          </Link>{" "}
        </p>
      </div>
    </div>
  )
}

export default Login