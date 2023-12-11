import { Slide } from "react-reveal";
import Title from "../Title/Title";


const AboutMe = () => {
    return (
        <div id="about" className="md:p-10">
            <Title text={'About Me'} />
            <div>
                <div className="flex flex-col-reverse lg:flex-row-reverse justify-between items-center 
            w-4/5 mx-auto gap-5">
                    <Slide right>
                        <div className="flex-1">

                            <p className=" text-base md:text-2xl text-white">
                                👋 Hi, I'm Zubayer Alam Aurnab, a skilled website developer dedicated to transforming ideas into captivating digital experiences.
                                <br />
                                <br />
                                💻
                                I specialize in creating clean, functional, and visually appealing websites. My expertise lies in crafting responsive and user-friendly interfaces that leave a lasting impression.
                                <br />
                                <br />
                                ✉️ 
                                Reach out to me at <span className="text-[#64b5f6] font-bold">zubayeraurnab@gmail.com</span> to discuss how we can work together to achieve your web development goals.
                                <br />
                                <br />
                                <span className="text-[#64b5f6] border-b-2">Education</span> <br /> <br />
                                <span>Bsc in Psychology</span> <br />
                                <span className="text-lg">National University</span><br />
                                <span className="text-lg">[2021-2025]</span>
                            </p>

                        </div>
                    </Slide>

                    <Slide left>
                        <div className="flex-1 justify-center items-center">
                            <img className=" lg:w-2/3  mx-auto rounded-xl" src='https://i.ibb.co/Vv1jvGR/Whats-App-Image-2023-12-11-at-11-26-58-PM.jpg' alt="" />

                        </div>
                    </Slide>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;