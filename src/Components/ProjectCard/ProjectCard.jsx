import Codebtn from './CodeBtn/Codebtn';
import LiveBtn from './LiveBtn/LiveBtn';
import './ProjectCard.css'
import img from '../../assets/screencapture-assignmest-12-web-app-2023-12-12-01_38_13.png'

const ProjectCard = ({ image, name, children, codeLink, liveLink }) => {
    return (
        <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl  text-black relative">
            <img className="object-cover w-full rounded-t-lg h- md:h-auto md:w-1/2 md:rounded-none md:rounded-s-lg" src={image} alt="" />
            <div className="flex flex-col justify-between  p-4 leading-normal  ">
                <div>
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">{name}</h5>
                    <p className="mb-3 font-normal text-gray-700 ">{children}</p>
                </div>
                <div className='flex justify-between sm:absolute bottom-2 gap-12  '>

                    <div className=''>
                        <a href={codeLink} target="_blank">
                            <Codebtn />
                        </a>
                    </div>
                    <div>
                        <a href={liveLink} target="_blank">
                            <LiveBtn />
                        </a>
                    </div>

                </div>
            </div>

        </div>

    );
};

export default ProjectCard;