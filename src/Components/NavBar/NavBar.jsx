import NavBtn from "../NavBtns/NavBtn";
import logo from '../../assets/logo.png'
import './Nav.css'
import { useState } from "react";
const NavBar = () => {
    const Links = <>

        <a href="">
            <li>
                <NavBtn text={"HOME"} />
            </li>
        </a>
        <a href="#about">
            <li>
                <NavBtn text={" ABOUT ME"} />
            </li>
        </a>
        <a href="#projects">
            <li>
                <NavBtn text={" PROJECTS"} />
            </li>
        </a>

        <a href="#contact">
            <li>
                <NavBtn text={" CONTACT"} />
            </li>
        </a>
    </>
    const [open, setOpen] = useState(false)
    // console.log(open)
    const handleCheckboxChange = () => {
        setOpen(!open);
    }
    return (
        // bg-[#b9ff3f]
        <>
            <div className="navbar bg-[#b9ff3f] z-50 relative  lg:px-44  flex justify-between">
                <img className="w-16 rounded-full h-16" src={logo} alt="" />
                <div className="list-none gap-4 hidden lg:flex">
                    {Links}
                </div>
                <div className='flex lg:hidden px-2'>
                    <label className="hamburger">
                        <input onClick={handleCheckboxChange} type="checkbox" checked={open} readOnly />
                        <svg viewBox="0 0 32 32">
                            <path className="line line-top-bottom" d="M27 10H13C10.8 10 9 8.2 9 6C9 3.5 10.8 2 13 2C15.2 2 17 3.8 17 6V26C17 28.2 18.8 30 21 30C23.2 30 25 28.2 25 26C25 23.8 23.2 22 21 22H7"></path>
                            <path className="line" d="M7 16H27"></path>
                        </svg>
                    </label>
                </div>


            </div>
            <div className={`flex flex-wrap bg-[#b9ff3f] list-none  justify-center  items-center gap-2 w-full  py-2 mt-10 l absolute transition-all duration-[700ms] ease-in-out  lg:hidden ${open ? 'top-10 opacity-100' : '-top-52 opacity-0 '}`}>
                {Links}
            </div>
        </>
    );
};

export default NavBar;