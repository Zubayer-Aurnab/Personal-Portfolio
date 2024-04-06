
import './App.css'

import NavBar from './Components/NavBar/NavBar';
import Banner from './Components/Banner/Banner';
import Par from './Components/Particles/Par';
import MySkills from './Components/MySkills/MySkills';
import AboutMe from './Components/AboutMe/AboutMe';
import { motion, useScroll } from "framer-motion"
import Projects from './Components/Projects/Projects';
import Contact from './Components/Contact/Contact';
import { Toaster } from 'react-hot-toast';
import Footer from './Components/Footer/Footer';
import ScrollUp from './Components/ScroolUP/ScrollUp';
import ClientProject from './Components/ClientProject/ClientProject';

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
        height: 7,
        background: "#64b5f6",
        transformOrigin: '0%',
        zIndex: 100
      }} />
      <div>
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
      </div>
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
