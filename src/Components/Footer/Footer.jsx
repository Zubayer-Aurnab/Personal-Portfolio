import { FaGithub } from "react-icons/fa";
import { GrLinkedin } from "react-icons/gr";
const Footer = () => {
    return (
        <footer className="footer p-2 lg:px-96 bg-[#bcfd49]  flex justify-between items-center text-black font-bold" >
            <aside>

                <p>© {new Date().getFullYear()} . All Rights Reserved. Design and developed by Zubayer Alam Aurnab</p>
            </aside>
            <nav>
                <header className=" text-lg   ml-4" >Social</header>
                <div className="grid grid-flow-col gap-4">
                    <a href="https://github.com/Zubayer-Aurnab" target="_blank" rel="noreferrer" className="text-4xl ">
                        <FaGithub />
                    </a>

                    <a href="https://www.linkedin.com/in/zubayer-aurnab-500b0725a/" target="_blank" rel="noreferrer" className="text-4xl ">
                        <GrLinkedin />
                    </a>

                </div>
            </nav>
        </footer>
    );
};

export default Footer;