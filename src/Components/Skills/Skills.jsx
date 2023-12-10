import Lottie from "lottie-react";
import html from '../../../public/html.json'
import css from '../../../public/css.json'
import JS from '../../../public/JS.json'
import react from '../../../public/react.json'
import firebase from '../../../public/firebase.json'
import node from '../../../public/nodej.json'
import express from '../../../public/express.json'
import mongo from '../../../public/mongo.json'



const Skills = () => {

    return (
        <div className="min-h-screen" >
            <h1 className="text-3xl text-center mb-10">My skills</h1>
            <div className="grid  lg:grid-cols-3 gap-4 lg:w-4/5 mx-auto p-4">
                {/* 1 */}
                <div className="card  bg-base-100 shadow-xl text-center">
                    <figure> <Lottie
                        className="h-96"
                        animationData={html} /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-2xl font-bold italic flex justify-center">HTML </h2>
                        <p>I'm proficient in HTML, the backbone of web development. I craft clean and structured HTML5 code, ensuring proper semantics for accessibility and SEO. I create organized documents, embed multimedia content, build user-friendly forms, and ensure cross-browser compatibility. My HTML skills are crucial for creating functional and visually appealing web pages.</p>
                    </div>
                </div>
                {/* 1 */}

                {/* 2 */}
                <div className="card  bg-base-100 shadow-xl text-center">

                    <figure> <Lottie
                        className="h-96"
                        animationData={css} /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-2xl font-bold italic flex justify-center">CSS </h2>
                        <p>I'm adept at CSS, the creative element of web development. With CSS, I breathe life into web designs, making them visually captivating and responsive. My CSS skills include:

                            Crafting responsive layouts that adapt seamlessly to various screen sizes.
                            Personalizing fonts, colors, and spacing to match design aesthetics.
                            Implementing animations and transitions for enhanced user engagement.
                            Ensuring consistent visual rendering across different browsers.
                            Collaborating with HTML and JavaScript to build interactive web interfaces.</p>
                    </div>
                </div>
                {/* 2 */}
                {/* 3 */}
                <div className="card  bg-base-100 shadow-xl text-center">

                    <figure> <Lottie

                        className="h-96 p-20"
                        animationData={JS} /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-2xl font-bold italic flex justify-center">JavaScript (JS) </h2>
                        <p>JavaScript is the engine that powers web interactivity. With my JavaScript skills, I bring web applications to life, creating dynamic, user-friendly experiences. I write efficient code, handle user interactions, integrate third-party functionality, and collaborate closely with HTML and CSS to deliver responsive and engaging web solutions.</p>
                    </div>
                </div>
                {/* 3 */}
                {/* 4 */}
                <div className="card  bg-base-100 shadow-xl text-center">

                    <figure> <Lottie
                        className="h-96 p-20"
                        animationData={react} /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-2xl font-bold italic flex justify-center"> REACT </h2>
                        <p className="">React is my preferred framework for crafting modern web applications. With React, I design dynamic and interactive user interfaces that offer a seamless and engaging user experience. My React skills encompass:

                            Creating component-based architectures for scalable and maintainable applications.
                            Leveraging state management tools like Redux or Mobx for robust data handling.
                            Managing routing and navigation with React Router for single-page applications.
                            Integrating APIs and third-party libraries to extend application functionality.
                            Implementing responsive design and ensuring cross-browser compatibility.
                            Collaborating with HTML, CSS,</p>
                    </div>
                </div>
                {/* 4 */}
                {/* 5 */}
                <div className="card  bg-base-100 shadow-xl text-center">

                    <figure> <Lottie

                        className="h-96 p-10"
                        animationData={firebase} /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-2xl font-bold italic flex justify-center"> FIREBASE </h2>
                        <p className="">Firebase is my preferred platform for developing and managing web and mobile applications. With Firebase, I harness a comprehensive set of services to streamline application development, including real-time databases, user authentication, serverless functions, hosting, Firestore for NoSQL databases, and real-time analytics. Firebase empowers me to create robust, real-time applications efficiently, with a reliable and scalable backend infrastructure, making it an invaluable asset for building and maintaining web and mobile applications. If you need further information or have specific questions, please feel free to ask!</p>
                    </div>
                </div>
                {/* 5 */}
                {/* 6 */}
                <div className="card  bg-base-100 shadow-xl text-center">

                    <figure> <Lottie

                        className="h-96 p-10"
                        animationData={node} /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-2xl font-bold italic flex justify-center"> Node.js </h2>
                        <p className="">I'm currently in the process of learning and mastering Node.js, a runtime environment that enables server-side application development with JavaScript. While I'm still on my learning journey, my Node.js experience includes gaining proficiency in server-side development, creating RESTful APIs, working with Express.js, understanding asynchronous programming, integrating databases (such as MongoDB and Mongoose), exploring the NPM ecosystem, and experimenting with real-time applications using technologies like WebSocket and Socket.io. Node.js is a crucial skill in modern web development, and I'm dedicated to furthering my expertise to become a well-rounded web developer, eager to apply my knowledge to real-world projects.</p>
                    </div>
                </div>
                {/* 6 */}
                {/* 7 */}
                <div className="card  bg-base-100 shadow-xl text-center">

                    <figure> <Lottie

                        className="h-96 p-10"
                        animationData={express} /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-2xl font-bold italic flex justify-center"> Express.js</h2>
                        <p className="">I'm currently in the process of learning Express.js, a widely-used web application framework for Node.js. My journey with Express.js involves understanding web server development, creating RESTful APIs and routes, exploring middleware, working with templating engines, experimenting with authentication and user sessions, and gaining insights into security practices. While I'm still learning, I'm enthusiastic about applying my growing expertise to real-world web development projects and continuing to advance my skills as a web developer.</p>
                    </div>
                </div>
                {/* 7 */}
                {/* 8 */}
                <div className="card  bg-base-100 shadow-xl text-center">

                    <figure> <Lottie

                        className="h-96 p-10"
                        animationData={mongo} /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-2xl font-bold italic flex justify-center"> MongoDB</h2>
                        <p className="">I'm currently in the process of learning and expanding my skills in MongoDB, a prominent NoSQL database system essential for modern web development. My MongoDB journey includes understanding NoSQL principles, data CRUD operations, data modeling, querying, indexing, data migration, backup, and security practices. While I'm still learning, I'm enthusiastic about applying my growing expertise to real-world web development projects and continuing to advance my skills as a web developer.</p>
                    </div>
                </div>
                {/* 8 */}

            </div>
        </div >
    );
};

export default Skills;