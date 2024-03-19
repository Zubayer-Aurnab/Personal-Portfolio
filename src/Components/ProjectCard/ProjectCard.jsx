import { Fade } from 'react-reveal';
import './ProjectCard.css';
import CardBtn from './CardBtn/CardBtn';

// eslint-disable-next-line react/prop-types
const ProjectCard = ({ image, name, children, codeLink, liveLink, youtube }) => {
    return (
        <Fade bottom>
            {/* <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row   text-black relative">
                <img className="object-cover w-full rounded-t-lg h- md:h-auto md:w-1/2 md:rounded-none md:rounded-s-lg" src={image} alt="" />
                <div className="flex flex-col justify-between  p-4 leading-normal  ">
                    <div>
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">{name}</h5>
                        <p className="mb-3 font-normal text-gray-700 ">{children}</p>
                    </div>
                    <div className='flex justify-between sm:absolute bottom-2 gap-12  '>

                        <div className=''>
                            <a href={codeLink} target="_blank" rel="noreferrer">
                                <Codebtn />
                            </a>
                        </div>
                        <div>
                            <a href={liveLink} target="_blank" rel="noreferrer">
                                <LiveBtn />
                            </a>
                        </div>

                    </div>
                </div>

            </div> */}

            <div className="card">
                <div className="top-section " style={{ backgroundImage: `url(${image})`, backgroundSize: "cover", }}>
                    <div className="border"></div>
                    <div className="icons">
                        <div className="">
                            <p className='text-white font-black text-xl pl-5'>{name}</p>
                        </div>

                    </div>
                </div>
                <div className="bottom-section">
                    <span className="title " style={{ textIndent: "50px", textAlign: "justify", }}>{children}</span>
                    <div className="flex justify-end gap-10 mt-10">
                        <div className={youtube ? "flex" : "hidden"}>
                            <a href={youtube} target="_blank" rel="noreferrer">
                                <CardBtn text={"🎥 Youtube"} />
                            </a>
                        </div>

                        <div className=''>
                            <a href={codeLink} target="_blank" rel="noreferrer">
                                <CardBtn text={"Code </>"} />
                            </a>
                        </div>
                        <div>
                            <a href={liveLink} target="_blank" rel="noreferrer">
                                <CardBtn text={"LIVE"} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

        </Fade>

    );
};

export default ProjectCard;