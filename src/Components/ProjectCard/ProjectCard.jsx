import { Fade } from 'react-reveal';
import './ProjectCard.css';
import CardBtn from './CardBtn/CardBtn';
import Title from '../Title/Title';

// eslint-disable-next-line react/prop-types
const ProjectCard = ({ image, name, children, codeLink, liveLink, youtube }) => {
    return (
        <Fade bottom>

            <div href="#"
                className="group relative block max-w-screen-sm  w-full mx-auto h"
            >

                <div
                    className="relative flex h-full w-full transform items-end border-2 border-[#bcfd49]  bg-white  transition-transform "
                >
                    <div
                        className=" !p-0 transition-opacity group-hover:absolute group-hover:opacity-0 sm:p-6 lg:p-8 duration-500"
                    >
                        <img src={image} alt="" className='w-full' />
                    </div>

                    <div
                        className="absolute p-4 opacity-0 transition-opacity group-hover:relative group-hover:opacity-100 sm:p-6 lg:p-8 duration-500"
                    >
                        <h3 className="mt-4  font-medium text-4xl">{name}</h3>

                        <p className="mt-4 text-xl">
                            {children}
                        </p>

                        <div className="bottom-section ">
                            <div className="flex justify-end gap-10 mt-10">
                                <div className={youtube ? "flex" : "hidden"}>
                                    <a href={youtube} target="_blank" rel="noreferrer">
                                        <CardBtn text={"🎥 Youtube"} />
                                    </a>
                                </div>

                                <div className={codeLink ? "flex" : "hidden"}>
                                    <a href={codeLink} target="_blank" rel="noreferrer">
                                        <CardBtn text={"Code </>"} />
                                    </a>
                                </div>
                                <div className={liveLink ? "flex" : "hidden"}>
                                    <a href={liveLink} target="_blank" rel="noreferrer">
                                        <CardBtn text={"LIVE"} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </Fade>

    );
};

export default ProjectCard;