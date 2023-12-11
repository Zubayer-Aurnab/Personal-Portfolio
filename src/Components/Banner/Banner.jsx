import Slide from 'react-reveal/Slide';
import Typed from 'react-typed';
import resume from '../../assets/AURNAB_WEB_DEVELOPER.pdf'
import Button from '../Button/Button';
const Banner = () => {

    return (
        <div id="home" className=" mt-32 relative z-10 h-screen md:z-10">

            <div className="flex flex-col-reverse lg:flex-row justify-between items-center w-4/5 mx-auto gap-5">
                <Slide left>
                    <div className="flex-1 ">
                        <p className="text-xl md:text-4xl  lg:text-5xl font-bold mb-10 text-center text-white ">
                            Hello, It's Me <br /> <span id="element" className=" text-[#64b5f6]  ">
                                <Typed
                                    className='md:text-3xl'
                                    strings={
                                        [
                                            "Zubayer Alam Aurnab",
                                            "WEB Developer ",
                                            "Front-End "
                                        ]
                                    }
                                    typeSpeed={70}
                                    backSpeed={30}
                                    loop
                                    backDelay={2000}
                                />
                            </span>
                        </p>
                        <div className='flex justify-center'>

                            <a href={resume} download='resume' target="_blank" rel="noopener noreferrer" className=''>
                                <Button />
                            </a>


                        </div>
                    </div>
                </Slide>

                <Slide right>

                    <div className="flex-1 justify-center items-center">
                        <img className="w-2/3  rounded-full mx-auto" src="https://i.ibb.co/nrS9P0H/329788705-1595954960907826-6575653788087669216-n.jpg" alt="" />

                    </div>
                </Slide>

            </div>

            <div className="text-center my-9">

            </div>
        </div>

    );
};

export default Banner;