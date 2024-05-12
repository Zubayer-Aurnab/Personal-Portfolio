import "https://unpkg.com/@splinetool/viewer@1.3.1/build/spline-viewer.js";
import Typed from 'react-typed';
import resume from '../../assets/AURNAB_WEB_DEVELOPER.pdf';
import Button from '../Button/Button';
const Banner = () => {

    return (
        <div id="home" className="h-screen md:mb-10 lg:mb-0">

            <div className="flex flex-col lg:flex-row  items-center ">

                <div className="h-[80vh]  flex justify-end items-center flex-1 my-10 lg:my-0 " >
                    <div>
                        <p className="text-3xl md:text-4xl  lg:text-5xl font-bold mb-10 text-center text-white ">
                            Zubayer Alam Aurnab <br /> <span style={{ fontFamily: "'Orbitron', sans-serif" }} id="element" className=" text-[#bcfd49]  ">
                                <Typed
                                    className='text-sm md:text-3xl'
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

                <div className="flex-1 h-[80vh] w-full justify-center items-center ">
                    <spline-viewer loading-anim-type="spinner-small-light" url="https://prod.spline.design/SRLrCPeLrOOgMsbD/scene.splinecode"></spline-viewer>
                </div>
            </div>
            <div className="h-[40vh] w-[9.5rem] lg:w-40 bg-black absolute right-2  bottom-36 md:bottom-[-150px] lg:bottom-[7.2rem] z-40 rounded-2xl
            ">

            </div>


        </div>

    );
};

export default Banner;