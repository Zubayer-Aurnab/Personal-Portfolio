import Lottie from "lottie-react";
import react from '../../../public/react.json'
import JS from '../../../public/JS.json'
import nodejs from '../../../public/nodej.json'
import express from '../../../public/express.json'
import mongo from '../../../public/mongo.json'
import css from '../../../public/css.json'
import html from '../../../public/html.json'
import { Slide } from "react-reveal";
import Title from "../Title/Title";


const MySkills = () => {
    return (
        <div>
           <Title text={"Skills"}/>
            <div className="w-4/5 mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 ">
                <Slide left>
                    {/* 1 */}
                    <div>
                        <div className="p-4 lg:p-10 bg-base-300 flex items-center gap-4 rounded-xl">
                            <h1 className="text-2xl font-bold">REACT</h1>
                            <Lottie
                                className="h-14"
                                animationData={react} />

                        </div>
                        <progress className="progress progress-info w-full" value="80" max="100"></progress>
                    </div>
                </Slide>
                <Slide right>
                    {/* 2 */}
                    <div>
                        <div className="p-4 lg:p-10 bg-base-300 flex items-center gap-4 rounded-xl">
                            <h1 className="text-2xl font-bold">JAVASCRIPT</h1>
                            <Lottie
                                className="h-14"
                                animationData={JS} />

                        </div>
                        <progress className="progress progress-info w-full" value="85" max="100"></progress>
                    </div>
                </Slide>
                <Slide left>
                    {/* 3*/}
                    <div>
                        <div className="p-1 px-4 lg:p-8 bg-base-300 flex items-center gap-4 rounded-xl">
                            <h1 className="text-2xl font-bold">NODE-JS</h1>
                            <Lottie
                                className="h-20"
                                animationData={nodejs} />

                        </div>
                        <progress className="progress progress-info w-full" value="55" max="100"></progress>
                    </div>
                </Slide>
                <Slide right>
                    {/* 4*/}
                    <div>
                        <div className="p-1 px-4 lg:p-8 bg-base-300 flex items-center gap-4 rounded-xl">
                            <h1 className="text-2xl font-bold">EXPRESS-JS</h1>
                            <Lottie
                                className="h-20"
                                animationData={express} />

                        </div>
                        <progress className="progress progress-info w-full" value="55" max="100"></progress>
                    </div>
                </Slide>
                <Slide left>
                    {/* 5*/}
                <div>
                    <div className="p-1 px-4 lg:p-8 bg-base-300 flex items-center gap-4 rounded-xl">
                        <h1 className="text-2xl font-bold">MongoDB</h1>
                        <Lottie
                            className="h-20"
                            animationData={mongo} />

                    </div>
                    <progress className="progress progress-info w-full" value="55" max="100"></progress>
                </div>
                </Slide>
               <Slide right>
                 {/* 6*/}
                 <div>
                    <div className="p-1 px-4 lg:p-8 bg-base-300 flex items-center gap-4 rounded-xl">
                        <h1 className="text-2xl font-bold">CSS</h1>
                        <Lottie
                            className="h-20"
                            animationData={css} />

                    </div>
                    <progress className="progress progress-info w-full" value="90" max="100"></progress>
                </div>
               </Slide>
               <Slide left >
                 {/* 7*/}
                 <div className="">
                    <div className="p-1 px-4 lg:p-8 bg-base-300 flex items-center gap-4 rounded-xl">
                        <h1 className="text-2xl font-bold">HTML</h1>
                        <Lottie
                            className="h-20"
                            animationData={html} />

                    </div>
                    <progress className="progress progress-info w-full" value="90" max="100"></progress>
                </div>
               </Slide>

            </div>
        </div>
    );
};

export default MySkills;