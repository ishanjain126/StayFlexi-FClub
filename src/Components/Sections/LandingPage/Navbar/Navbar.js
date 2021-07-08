import React, {useState, useEffect} from 'react';
import {absoluteURL} from "../../../../Utils";


// Bootstrap is used to display navbar. optimized for both desktop and mobile view
// Displaying three tabs : Home, News and Contact Us for now. 

function Navbar({color}) {
    const [tabColor, setTabColor] = useState("#13151C");
    const [navLinkColor, setNavLinkColor] = useState("white")

    useEffect(() => {
        window.onscroll = () => {
            if(window.scrollY > 100){
                setTabColor("#ffffff")
                setNavLinkColor("black");
            }
            else{
                setTabColor("#13151C")
                setNavLinkColor("white")
            }
        }
    }, [])
    // console.log(tabColor)

    return (
    
        <div className="navbarWrapper">
            <nav className="navbar navbar-inverse"  style={{backgroundColor:`${tabColor}`}}>
                <div className="container-fluid" style={{backgroundColor:`${color}`}}>
                    <div className="navbar-header">
                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>                        
                    </button>
                    <a className="navbar-brand" href="/">
                        FClub
                    </a>
                    </div>
                    <div className="collapse navbar-collapse" id="myNavbar">
                        <ul className="nav navbar-nav">
                            <li>
                                <a href="/" 
                                className="nav-links" 
                                style={{color:{navLinkColor}}}
                                >
                                    Home
                                </a>
                            </li>
                            <li>
                                <a 
                                href="/#news" 
                                style={{color:{navLinkColor}}}
                                className="nav-links" >
                                    News
                                </a>
                            </li>
                            <li>
                                <a 
                                href="/#contact" 
                                style={{color:{navLinkColor}}}
                                className="nav-links" >
                                    Contact Us
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>

    )
}

export default Navbar
