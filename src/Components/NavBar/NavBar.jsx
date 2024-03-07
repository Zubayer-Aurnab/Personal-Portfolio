import NavBtn from "../NavBtns/NavBtn";





const NavBar = () => {
    const Links = <>

        <li>
            <NavBtn text={"HOME"} />
        </li>
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
    return (
        <div className="navbar bg-neutral-900 z-10 relative lg:px-44 ">
            <div className="navbar-start">
                <div className="dropdown hidden ">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3  p-2 shadow bg-base-100 rounded-box w-52 space-y-5 relative z-40 ">
                        {
                            Links
                        }
                    </ul>
                </div>

                <div className="hidden lg:flex">
                    <img className="w-1/2" src="https://i.ibb.co/sKzRych/Screenshot-2023-10-06-002351-removebg-preview.png" alt="" />
                </div>
            </div>


            <div className="navbar-center hidden lg:flex">


            </div>


            <div className="navbar-end hidden lg:flex">

                <ul className="space-x-4 menu-horizontal px-1 text-white  font-bold">
                    {
                        Links
                    }
                </ul>
            </div>
            <div className="navbar-end flex lg:hidden">
                <img className="w-2/3" src="https://i.ibb.co/sKzRych/Screenshot-2023-10-06-002351-removebg-preview.png" alt="" />
            </div>
        </div>
    );
};

export default NavBar;