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
import './Card.css'

const MySkills = () => {
    return (
        <div>
            <Title text={"Skills"} />
            <div className="w-4/5 mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 text-white ">
                <Slide left>
                    {/* 0 */}
                    <div >
                        <div className="p-4 lg:p-10 bg-[#1b233d] flex items-center gap-4 rounded-xl">
                            <h1 className="text-2xl font-bold">Next-JS</h1>
                            {/* <Lottie
                                className="h-14"
                                animationData={react} /> */}
                            <svg className="w-14 h-14 pulse rounded-full" fill="none"  viewBox="0 0 1000 1000" width="1000" xmlns="http://www.w3.org/2000/svg"><path d="m467.253.269139c-2.15.195474-8.993.879641-15.151 1.368331-142.034 12.80363-275.074 89.42963-359.3356 207.20353-46.9208 65.484-76.9306 139.764-88.26982 218.443-4.007821 27.464-4.49658 35.576-4.49658 72.814s.488759 45.35 4.49658 72.814c27.17502 187.754 160.80142 345.502 342.03342 403.949 32.453 10.458 66.666 17.592 105.572 21.893 15.151 1.666 80.645 1.666 95.796 0 67.156-7.428 124.047-24.044 180.157-52.681 8.602-4.398 10.264-5.571 9.091-6.548-.782-.586-37.439-49.748-81.428-109.173l-79.96-107.999-100.196-148.268c-55.132-81.513-100.489-148.17-100.88-148.17-.391-.097-.782 65.778-.977 146.215-.293 140.84-.391 146.509-2.151 149.832-2.541 4.789-4.496 6.744-8.602 8.894-3.128 1.564-5.865 1.857-20.625 1.857h-16.912l-4.496-2.835c-2.933-1.857-5.083-4.3-6.549-7.134l-2.053-4.399.195-195.963.293-196.061 3.031-3.812c1.564-2.052 4.887-4.691 7.233-5.962 4.008-1.955 5.572-2.15 22.483-2.15 19.942 0 23.265.782 28.446 6.451 1.466 1.563 55.719 83.272 120.626 181.693 64.907 98.422 153.665 232.811 197.263 298.783l79.178 119.924 4.008-2.639c35.484-23.066 73.021-55.906 102.737-90.114 63.246-72.618 104.008-161.169 117.693-255.583 4.008-27.464 4.497-35.576 4.497-72.814s-.489-45.35-4.497-72.814c-27.175-187.754-160.801-345.5019-342.033-403.9488-31.965-10.3602-65.982-17.49504-104.105-21.79548-9.385-.977375-73.998-2.05248-82.112-1.270581zm204.692 302.398861c4.692 2.346 8.505 6.842 9.873 11.533.782 2.542.978 56.884.782 179.348l-.293 175.732-30.987-47.5-31.085-47.5v-127.743c0-82.588.391-129.013.977-131.261 1.564-5.474 4.985-9.774 9.678-12.315 4.007-2.053 5.474-2.248 20.821-2.248 14.467 0 17.008.195 20.234 1.954z" fill="#000" /></svg>

                        </div>
                        <progress className="progress progress-info w-full border " value="60" max="100"></progress>
                    </div>
                </Slide>
                <Slide right>
                    {/* 1 */}
                    <div >
                        <div className="p-4 lg:p-10 bg-[#1b233d] flex items-center gap-4 rounded-xl">
                            <h1 className="text-2xl font-bold">REACT</h1>
                            <Lottie
                                className="h-14"
                                animationData={react} />

                        </div>
                        <progress className="progress progress-info w-full border " value="80" max="100"></progress>
                    </div>
                </Slide>
                <Slide left>
                    {/* 2 */}
                    <div >
                        <div className="p-4 lg:p-10 bg-[#1b233d] flex items-center gap-4 rounded-xl">
                            <h1 className="text-2xl font-bold">JAVASCRIPT</h1>
                            <Lottie
                                className="h-14"
                                animationData={JS} />

                        </div>
                        <progress className="progress progress-info w-full border " value="80" max="100"></progress>
                    </div>
                </Slide>
                <Slide right>
                    {/* 3 */}
                    <div >
                        <div className="p-4 lg:p-10 bg-[#1b233d] flex items-center gap-4 rounded-xl">
                            <h1 className="text-2xl font-bold">REDUX</h1>
                            <svg className="h-14 w-14 slow-wheel" viewBox="0 0 256 244" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid"><path d="M177.381 169.733c9.447-.978 16.614-9.122 16.288-18.896-.325-9.773-8.47-17.592-18.243-17.592h-.651c-10.1.326-17.918 8.796-17.592 18.895.326 4.887 2.28 9.122 5.212 12.054-11.076 21.828-28.016 37.791-53.426 51.148-17.266 9.122-35.183 12.38-53.1 10.1-14.66-1.955-26.062-8.47-33.23-19.222-10.424-15.963-11.401-33.23-2.605-50.496 6.19-12.38 15.962-21.502 22.152-26.063-1.303-4.235-3.258-11.402-4.235-16.614-47.237 34.207-42.35 80.468-28.016 102.295 10.75 16.29 32.577 26.389 56.684 26.389 6.515 0 13.03-.652 19.546-2.28 41.699-8.145 73.299-32.905 91.216-69.718zm57.336-40.397c-24.759-28.995-61.245-44.958-102.944-44.958h-5.212c-2.932-5.864-9.122-9.774-15.963-9.774h-.652C99.848 74.93 92.03 83.4 92.355 93.5c.326 9.773 8.47 17.592 18.243 17.592h.651c7.167-.326 13.357-4.887 15.963-11.077h5.864c24.759 0 48.214 7.167 69.39 21.176 16.288 10.751 28.016 24.76 34.531 41.7 5.538 13.683 5.212 27.04-.652 38.443-9.121 17.266-24.432 26.714-44.63 26.714-13.031 0-25.41-3.91-31.926-6.842-3.583 3.258-10.099 8.47-14.66 11.729 14.009 6.515 28.343 10.099 42.025 10.099 31.274 0 54.404-17.267 63.2-34.533 9.447-18.896 8.795-51.474-15.637-79.165zM69.225 175.27c.326 9.774 8.47 17.592 18.243 17.592h.652c10.099-.325 17.917-8.796 17.591-18.895-.325-9.774-8.47-17.592-18.243-17.592h-.651c-.652 0-1.63 0-2.28.325-13.357-22.153-18.895-46.26-16.94-72.323 1.302-19.547 7.818-36.488 19.22-50.497 9.447-12.054 27.69-17.918 40.07-18.243 34.531-.652 49.19 42.351 50.168 59.618 4.235.977 11.402 3.258 16.289 4.887C189.434 27.366 156.857 0 125.584 0c-29.32 0-56.359 21.176-67.11 52.451-14.985 41.7-5.212 81.771 13.031 113.372-1.628 2.28-2.606 5.864-2.28 9.448z" fill="#764ABC"/></svg>

                        </div>
                        <progress className="progress progress-info w-full border" value="35" max="100"></progress>
                    </div>
                </Slide>
                <Slide left>
                    {/* 3 */}
                    <div >
                        <div className="p-4 lg:p-10 bg-[#1b233d] flex items-center gap-4 rounded-xl">
                            <h1 className="text-2xl font-bold">Material UI</h1>
                            <svg className="h-14 w-14 shake" viewBox="0 0 600 476.30000000000007" xmlns="http://www.w3.org/2000/svg" width="2500" height="1985"><path d="M0 259.8V0l225 129.9v86.6L75 129.9v173.2z" fill="#00b0ff"/><path d="M225 129.9L450 0v259.8l-150 86.6-75-43.3 150-86.6v-86.6l-150 86.6z" fill="#0081cb"/><path d="M225 303.1v86.6l150 86.6v-86.6z" fill="#00b0ff"/><path d="M375 476.3l225-129.9V173.2l-75 43.3v86.6l-150 86.6zm150-346.4V43.3L600 0v86.6z" fill="#0081cb"/></svg>
                        </div>
                        <progress className="progress progress-info w-full border" value="65" max="100"></progress>
                    </div>
                </Slide>
                <Slide right>
                    {/* 4*/}
                    <div >
                        <div className="p-1 px-4 lg:p-8 bg-[#1b233d] flex items-center gap-4 rounded-xl">
                            <h1 className="text-2xl font-bold">NODE-JS</h1>
                            <Lottie
                                className="h-20"
                                animationData={nodejs} />

                        </div>
                        <progress className="progress progress-info w-full border" value="55" max="100"></progress>
                    </div>
                </Slide>
                <Slide left>
                    {/* 5*/}
                    <div >
                        <div className="p-1 px-4 lg:p-8 bg-[#1b233d] flex items-center gap-4 rounded-xl">
                            <h1 className="text-2xl font-bold">EXPRESS-JS</h1>
                            <Lottie
                                className="h-20"
                                animationData={express} />

                        </div>
                        <progress className="progress progress-info w-full border" value="55" max="100"></progress>
                    </div>
                </Slide>
                <Slide right>
                    {/* 6*/}
                    <div >
                        <div className="p-1 px-4 lg:p-8 bg-[#1b233d] flex items-center gap-4 rounded-xl">
                            <h1 className="text-2xl font-bold">MongoDB</h1>
                            <Lottie
                                className="h-20"
                                animationData={mongo} />

                        </div>
                        <progress className="progress progress-info w-full border" value="55" max="100"></progress>
                    </div>
                </Slide>
                <Slide left>
                    {/* 7*/}
                    <div >
                        <div className="p-1 px-4 lg:p-8 bg-[#1b233d] flex items-center gap-4 rounded-xl">
                            <h1 className="text-2xl font-bold">CSS</h1>
                            <Lottie
                                className="h-20"
                                animationData={css} />

                        </div>
                        <progress className="progress progress-info w-full border-spacing-2 border" value="90" max="100"></progress>
                    </div>
                </Slide>
                <Slide right >
                    {/* 8*/}
                    <div >
                        <div className="p-1 px-4 lg:p-8 bg-[#1b233d] flex items-center gap-4 rounded-xl">
                            <h1 className="text-2xl font-bold">HTML</h1>
                            <Lottie
                                className="h-20"
                                animationData={html} />

                        </div>
                        <progress className="progress progress-info w-full border" value="90" max="100"></progress>
                    </div>
                </Slide>

            </div>
        </div>
    );
};

export default MySkills;