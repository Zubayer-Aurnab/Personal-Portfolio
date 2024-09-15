import ProjectCard from '../ProjectCard/ProjectCard';
import Title from '../Title/Title'
import fittrack from '../../assets/projects/Fit-Track.png'
import flyB from '../../assets/projects/Flying-Bird.png'
import Travood from '../../assets/projects/Travood.png'
import ContestHub from '../../assets/projects/Contest-hub.png'
const Projects = () => {
    return (
        <div id='projects' className=' md:p-10 mt-44'>
            <Title text={"PERSONAL PROJECT'S"} />
            <div className=' p-4 md:w-4/5 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:px-10'>
                {/* 0 */}
                <ProjectCard
                    image={flyB}
                    liveLink={"https://www.flyingbird.com.bd/"}
                    name={"Flying Bird"}
                >
                    Flying Bird was a travel website offering destination information, plane ticket and visa applications, group
                    bookings, and Umrah trips. Users could easily book tickets and plan travels, enjoying a seamless experience with
                    comparison options and comprehensive guides

                </ProjectCard>
                <ProjectCard
                    image={fittrack}
                    codeLink={'https://github.com/justJubair/fit-track-client/tree/main'}
                    liveLink={"https://fit-track-client.vercel.app/"}
                    name={"Fit Track"}
                    youtube={"https://youtu.be/NPQujnbspas?si=FDo1NAu3D0tq3u4M"}
                >
                    And recently, I led a team of 6 developers. We built a highly functional fitness tracking app called Fit Track.
                    Our goal with this fitness tracking application is simple: we want to make Fit Track your one-stop solution for all your health and fitness-related needs.
                    we use Next.js and Material UI. And for the backend, we utilize Mongoose and MongoDB as the database, along with Node.js and Express

                </ProjectCard>
                {/* 1 */}
                <ProjectCard
                    image={ContestHub}
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
                    image={Travood}
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
                {/* <ProjectCard
                    image={'https://i.ibb.co/sQCkyNj/screencapture-wedding-management-575f2-web-app-2023-12-12-02-14-57.png'}
                    codeLink={'https://github.com/Zubayer-Aurnab/Wedding-website'}
                    liveLink={"https://wedding-management-575f2.web.app/"}
                    name={"The Farmhouse"} >
                    Discover seamless wedding planning with our user-friendly website—book services effortlessly, connect with our team, and explore detailed descriptions of our offerings. Our responsive design ensures a flawless experience on any device, while a stunning gallery provides inspiration from past events. Enjoy swift loading times with our lightweight website design. Make your wedding planning a breeze—explore our site for an enchanting journey toward your dream day.
                </ProjectCard> */}

            </div>
        </div>
    );
};

export default Projects;