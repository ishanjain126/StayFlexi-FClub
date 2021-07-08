import React from 'react'
import Navbar from '../Sections/LandingPage/Navbar/Navbar'
import HomeSection from '../Sections/HomeSection'
import News from "../Sections/LandingPage/News/News";
import Contact from "../Sections/LandingPage/Contact";


// Calling all the landing page components here

function Homepage() {  

    return (
        <div>
            <Navbar />
            <HomeSection />
            <News />
            <Contact />
        </div>
    )
}

export default Homepage
