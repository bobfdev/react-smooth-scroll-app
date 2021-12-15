import { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';

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
        </>
    )
}

export default Home
