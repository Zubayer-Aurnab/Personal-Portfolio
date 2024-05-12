import "https://unpkg.com/@splinetool/viewer@1.3.1/build/spline-viewer.js";
import Typed from 'react-typed';
import resume from '../../assets/AURNAB_WEB_DEVELOPER.pdf';
import Button from '../Button/Button';
const Banner = () => {

    return (
        <div id="home" className="  h-screen">

            <div className="flex flex-col-reverse lg:flex-row  items-center ">

                <div className="h-[80vh]   flex justify-end items-center flex-1">
                    <div>
                        <p className="text-xl md:text-4xl  lg:text-5xl font-bold mb-10 text-center text-white ">
                            Zubayer Alam Aurnab <br /> <span style={{ fontFamily: "'Orbitron', sans-serif" }} id="element" className=" text-[#bcfd49]  ">
                                <Typed
                                    className='md:text-3xl'
                                    strings={
                                        [
                                            "WEB DEVELOPER ",
                                            "MERN Stack"
                                        ]
                                    }
                                    typeSpeed={70}
                                    backSpeed={30}
                                    loop
                                    backDelay={3000}
                                />
                            </span>
                        </p>
                        <div className='flex justify-center'>

                            <a href={resume} download='resume' target="_blank" rel="noopener noreferrer" className=''>
                                <Button text={"RESUME"} />
                            </a>


                        </div>
                    </div>
                </div>

                <div className="   flex-1 h-[80vh] w-full justify-center items-center">
                    {/* <img className="w-2/3  rounded-full mx-auto" src="https://i.ibb.co/nrS9P0H/329788705-1595954960907826-6575653788087669216-n.jpg" alt="" /> */}

                    {/* <spline-viewer url="https://prod.spline.design/SRLrCPeLrOOgMsbD/scene.splinecode"></spline-viewer>
                    <script type="module" src=""></script> */}
                    <spline-viewer hint url="https://prod.spline.design/SRLrCPeLrOOgMsbD/scene.splinecode"></spline-viewer>
                    {/* <spline-viewer url="https://prod.spline.design/SRLrCPeLrOOgMsbD/scene.splinecode"></spline-viewer> */}
                </div>


            </div>


        </div>

    );
};

export default Banner;