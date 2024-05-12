
import './App.css';

import { motion, useScroll } from "framer-motion";
import { Toaster } from 'react-hot-toast';
import AboutMe from './Components/AboutMe/AboutMe';
import Banner from './Components/Banner/Banner';
import ClientProject from './Components/ClientProject/ClientProject';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import MySkills from './Components/MySkills/MySkills';
import NavBar from './Components/NavBar/NavBar';
import Projects from './Components/Projects/Projects';
import ScrollUp from './Components/ScroolUP/ScrollUp';

function App() {
  const { scrollYProgress } = useScroll();
  return (
    <>
      <motion.div style={{
        scaleX: scrollYProgress,
        position: "fixed",
        top: 0,
        right: 0,
        left: 0,
        height: 4,
        background: "#bcfd49",
        transformOrigin: '0%',
        zIndex: 100
      }} />
      {/* <div>
        <div style={{
          backgroundImage: 'url("https://i.ibb.co/TRgWtv1/back1.jpg")',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }} className="h-screen">
          <NavBar />
          <Banner />
        </div>
        <Par />
      </div> */}
      <NavBar />
      <Banner />
      <AboutMe />
      <MySkills />
      <ClientProject />
      <Projects />
      <Contact />
      <ScrollUp />
      <Footer />
      <Toaster position="top-center"
        reverseOrder={false} />
    </>
  )
}

export default App
