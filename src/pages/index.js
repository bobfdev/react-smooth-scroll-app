import { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import MainSection from '../components/MainSection';
import InfoSection from '../components/InfoSection';
import Services from '../components/Services';
import Footer from '../components/Footer';
import { homeObjOne, homeObjTwo, homeObjThree } from '../components/InfoSection/InfoData';

function Home() {
    // Sidebar is set to closed by default
    const [isOpen, setIsOpen] = useState(false);
    // function to open the Sidebar 
    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
         <Sidebar isOpen={isOpen} toggle={toggle} />
         <Navbar toggle={toggle} />   
         <MainSection />
         <InfoSection {...homeObjOne}/>
         <InfoSection {...homeObjTwo}/>
         <Services />
         <InfoSection {...homeObjThree}/>
         <Footer />
        </>
    )
}

export default Home
