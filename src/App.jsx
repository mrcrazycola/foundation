
import './App.css'
import AboutMain from './components/Aboutus/AboutMain'
import Footer from './components/Footer/Footer'
import FountaionDetailmain from './components/FountationDetails/FountaionDetailmain'
import HeroMain from './components/HeroSection/HeroMain'
import HowWeServe from './components/HowWeServe/HowWeServe'
import JoinNow from './components/JoinNow/JoinNow'

import NavbarMain from './components/navbar/NavbarMain'
import Threesection from './components/ThreeSection/Threesection'
import VideoButton from './components/VideoButton/VideoButton'
import WhatWeDo from './components/WhatWeDo/WhatWeDo'

function App() {

  return (
   <main className='font-body w-full overflow-hidden'>
    <NavbarMain></NavbarMain>
    <HeroMain></HeroMain>
    <AboutMain></AboutMain>
    <Threesection></Threesection>
    <WhatWeDo></WhatWeDo>
    <VideoButton></VideoButton>
    <HowWeServe></HowWeServe>
    <JoinNow></JoinNow>
    <FountaionDetailmain></FountaionDetailmain>
    <Footer></Footer>
   </main>
  )
}

export default App
