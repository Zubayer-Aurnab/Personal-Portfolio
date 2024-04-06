import { Fade } from 'react-reveal';
import './ProjectCard.css';
import CardBtn from './CardBtn/CardBtn';

// eslint-disable-next-line react/prop-types
const ProjectCard = ({ image, name, children, codeLink, liveLink, youtube }) => {
    return (
        <Fade bottom>

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

        </Fade>

    );
};

export default ProjectCard;