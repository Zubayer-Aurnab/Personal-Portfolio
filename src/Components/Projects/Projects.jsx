import ProjectCard from '../ProjectCard/ProjectCard';
import Title from '../Title/Title'

const Projects = () => {
    return (
        <div className=' p-10'>
            <Title text={'Projects'} />
            <div className=' md:w-4/5 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-4'>
                {/* 1 */}
                <ProjectCard
                    image={'https://i.ibb.co/wWW230W/screencapture-assignmest-12-web-app-2023-12-12-01-38-13.png'}
                    codeLink={'https://github.com/Zubayer-Aurnab/ContestHub'}
                    liveLink={"https://assignmest-12.web.app/"}
                    name={"ContestHub"} >
                    Developed and launched a dynamic Contest Hub website, seamlessly
                    blending functionality with a touch of fun. Users easily join
                    contests via a secure login system with role-based access. Implemented
                    robust payment methods for smooth transactions,
                    enhancing overall user engagement across devices. The platform
                    features a dynamic dashboard tailored for three distinct roles
                </ProjectCard>
                {/* 2 */}
                <ProjectCard
                    image={'https://i.ibb.co/bWQqv51/screencapture-hungry-explorer-web-app-2023-12-12-01-58-53.png'}
                    codeLink={'https://github.com/Zubayer-Aurnab/TRAVOOD-FOOD-WEBSITE'}
                    liveLink={"https://hungry-explorer.web.app/"}
                    name={"TRAVOOD"} >
                    Engineered a dynamic food ordering website boasting advanced
                    features such as search functionality, pagination, and secure user
                    login. The responsive design ensures a seamless experience,
                    while the added capability for users to edit and delete their own
                    food listings enhances customization. This project underscores
                    a blend of technical expertise and user-centric design, showcasing
                    proficiency in delivering comprehensive and interactive web
                    solutions.</ProjectCard>
                {/* 3 */}
                <ProjectCard
                    image={'https://i.ibb.co/sQCkyNj/screencapture-wedding-management-575f2-web-app-2023-12-12-02-14-57.png'}
                    codeLink={'https://github.com/Zubayer-Aurnab/Wedding-website'}
                    liveLink={"https://wedding-management-575f2.web.app/"}
                    name={"The Farmhouse"} >
                    Discover seamless wedding planning with our user-friendly website—book services effortlessly, connect with our team, and explore detailed descriptions of our offerings. Our responsive design ensures a flawless experience on any device, while a stunning gallery provides inspiration from past events. Enjoy swift loading times with our lightweight website design. Make your wedding planning a breeze—explore our site for an enchanting journey toward your dream day.</ProjectCard>
            </div>
        </div>
    );
};

export default Projects;