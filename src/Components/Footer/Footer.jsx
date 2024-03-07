import { FaGithub } from "react-icons/fa";
import { GrLinkedin } from "react-icons/gr";
const Footer = () => {
    return (
        <footer className="footer p-2 lg:px-96 bg-neutral text-neutral-content flex justify-between items-center">
            <aside>

                <p>© 2020 yitbd. All Rights Reserved. Design and developed by Zubayer Alam Aurnab</p>
            </aside>
            <nav>
                <header className="footer-title">Social</header>
                <div className="grid grid-flow-col gap-4">
                    <a href="https://github.com/Zubayer-Aurnab" target="_blank" className="text-4xl ">
                        <FaGithub />
                    </a>

                    <a href="https://www.linkedin.com/in/zubayer-aurnab-500b0725a/" target="_blank" className="text-4xl ">
                        <GrLinkedin />
                    </a>

                </div>
            </nav>
        </footer>
    );
};

export default Footer;