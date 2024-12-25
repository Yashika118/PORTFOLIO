import React from 'react'
import logo from "../assets/logo.png"
import {FaLinkedin} from "react-icons/fa";
import {FaGithub} from "react-icons/fa";
import {FaInstagram} from "react-icons/fa";


const Navbar = () => {
  return (
    <nav className='mb-20 flex items-center justify-between py-6'>
        <div className='flex flex-shrink-0 items-center'>
            <img src={logo} alt="logo" className='mx-2 w-10' />
        </div>

        <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
            <a href="https://www.linkedin.com/in/yashika118/" ><FaLinkedin/></a>
            <a href="https://github.com/Yashika118"><FaGithub/></a>
            <a href="https://www.instagram.com/yashikakumari2202/"> <FaInstagram/></a>
        </div>

    </nav>

  )
}

export default Navbar