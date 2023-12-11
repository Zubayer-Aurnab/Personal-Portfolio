
import './App.css'

import NavBar from './Components/NavBar/NavBar';
import Banner from './Components/Banner/Banner';
import Skills from './Components/Skills/Skills';
import Par from './Components/Particles/Par';


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
      <Skills />
    </>
  )
}

export default App
