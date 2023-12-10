



const NavBar = () => {
    const Links = <>

        <li>

            HOME

        </li>
        <li>

            ABOUT ME

        </li>
        <li>

            SERVICES

        </li>
        <li>

            PORTFOLIO

        </li>
        <li>

            CONTACT

        </li>
    </>
    return (


        <div className="navbar bg-neutral-900 lg:px-44">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3  p-2 shadow bg-base-100 rounded-box w-52 space-y-5 ">
                        {
                            Links
                        }
                    </ul>
                </div>

                <div className="hidden lg:flex">
                    <img className="w-3/4" src="https://i.ibb.co/sKzRych/Screenshot-2023-10-06-002351-removebg-preview.png" alt="" />
                </div>
            </div>


            <div className="navbar-center hidden lg:flex">


            </div>


            <div className="navbar-end hidden lg:flex">

                <ul className="space-x-8 menu-horizontal px-1 text-white  font-bold">
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