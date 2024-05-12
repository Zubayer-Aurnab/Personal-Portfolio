import ProjectCard from "../ProjectCard/ProjectCard";
import Title from "../Title/Title";


const ClientProject = () => {
    return (
        <div id='projects' className=' md:p-10 mt-44 '>
            <Title text={"CLIENT PROJECT'S"} />
            <div className=' p-4 md:w-4/5 mx-auto  gap-10  lg:px-10  flex justify-center'>
                {/* 0 */}
                <div className=" lg:w-1/2">
                    <ProjectCard
                        image={'https://i.ibb.co/LSsJ2xv/screencapture-khordailcharasecondaryschool-2024-04-07-03-28-19.png'}
                        liveLink={"https://khordailcharasecondaryschool.com/"}
                        name={"Khord Ailchara  School"}
                        className='grid'
                    >
                        Currently working on the website for Khord Ailchara Secondary School, located in Kustia Sadar. This platform will provide essential school information, notices, and announcements for users. Stay tuned for updates as I develop this valuable resource for the school community.
                    </ProjectCard>
                </div>
            </div>
        </div>
    );
};

export default ClientProject;