import ProjectCard from "../ProjectCard/ProjectCard";
import Title from "../Title/Title";
import identity from '../../assets/projects/Identity-inclusion.png'
import school from '../../assets/projects/school-project.png'

const ClientProject = () => {
    return (
        <div id='projects' className=' md:p-10 mt-44 '>
            <Title text={"CLIENT PROJECT'S"} />
            <div className=' p-4 md:w-4/5 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:px-10'>
                {/* 0 */}

                <ProjectCard
                    image={identity}
                    liveLink={"https://identityinclusion.com/"}
                    name={"Identity Inclusion"}
                    className='grid'
                >
                    Identity Inclusion is a development consulting firm dedicated to addressing societal and institutional exclusion
                    of marginalized communities, particularly those with psychosocial disabilities. Through assessments,
                    awareness, capacity building, and policy advocacy, the firm aims to foster systemic change and inclusion.

                </ProjectCard>


                <ProjectCard
                    image={school}
                    liveLink={"https://khordailcharasecondaryschool.netlify.app/"}
                    name={"Khord Ailchara  School"}
                    className='grid'
                >
                    Currently working on the website for Khord Ailchara Secondary School, located in Kustia Sadar. This platform will provide essential school information, notices, and announcements for users. Stay tuned for updates as I develop this valuable resource for the school community.
                </ProjectCard>

            </div>
        </div>
    );
};

export default ClientProject;