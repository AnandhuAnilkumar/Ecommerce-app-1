import React from 'react';
import logo from "../assets/logo.png";
import { Link } from 'react-router-dom';
import { HiOutlineUserCircle } from "react-icons/hi2";
import { BsCartFill } from "react-icons/bs";

const Header = () => {
  return (
    <header className='fixed shadow-md w-full h-16 px-2 md:px-4 z-50'>
        {/* md = desktop version */}

            <div className='flex items-center h-full justify-between'>
                <Link to={""}>
                <div className='h-16'>
                    <img src={logo} className='h-full'/>
                </div>
                </Link>

                <div className='flex items-center gap-4 md:gap-7'>
                    <nav className='flex gap-4 md:gap-6 text-base md:text-lg'>
                        <Link to={""}>Home</Link>
                        <Link to={"menu"}>Menu</Link>
                        <Link to={"about"}>About</Link>
                        <Link to={"contact"}>Contact</Link>
                    </nav>
                    <div className='text-2xl text-slate-600 relative'>
                        <BsCartFill />
                        <div className='absolute -top-1 -right-1 text-white bg-red-500 h-4 w-4 rounded-full m-0 p-0 text-sm text-center '>0</div>
                    </div>
                    <div className=' text-slate-600'>
                        <div className='text-3xl'>
                            <HiOutlineUserCircle />
                        </div>
                    </div>
                </div>
            </div>

        {/* mobile version */}


    </header>
  )
}

export default Header