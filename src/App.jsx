
import './App.css'

import NavBar from './Components/NavBar/NavBar';
import Banner from './Components/Banner/Banner';
import Par from './Components/Particles/Par';
import MySkills from './Components/MySkills/MySkills';
import AboutMe from './Components/AboutMe/AboutMe';


function App() {



  return (
    <>
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
      <MySkills />
      <AboutMe />

    </>
  )
}

export default App
