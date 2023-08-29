import '../styles/Navbar.css'
import React, { useState } from 'react';
import { Link } from "react-scroll"
import { slide as Menu } from 'react-burger-menu'

const Navbar = () => {    
    const [menuOpen, setMenuOpen] = useState(false);


    return (
        <nav className="navbar">
            <div className="navbar-content">
                {/* <div className="navbar-circle-container">
                    <div className="navbar-circle" id="navbar-circle-1">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div> */}
                <Link to="home-page" smooth={true}>
                    <div className="navbar-logo">
                        <span>H</span>
                        <span>a</span>
                        <span>c</span>
                        <span>k</span>
                        <span>C</span>
                        <span>M</span>
                        <span>U</span>
                        <span> </span>
                        <span>2</span>
                        <span>0</span>
                        <span>2</span>
                        <span>3</span>
                    </div>
                    {/* <img className='navbar-logo' src="../../hackcmu-logo-black-short.png"></img>                 */}
                </Link>
                <div className="links-container">               
                    <Link to="home-page" smooth={true}>
                        <div className="link">Home</div>
                    </Link>
                    <Link to="schedule-page" smooth={true} offset={-0.08*window.innerHeight}>
                        <div className="link">Schedule</div>
                    </Link>
                    <Link to="faq-page" smooth={true} offset={-0.06*window.innerHeight}>
                        <div className="link">FAQ</div>
                    </Link>
                    <Link to="prizes-page" smooth={true} offset={-0.08*window.innerHeight}>
                        <div className="link">Prizes</div>
                    </Link>
                    <Link to="sponsors-page" smooth={true} offset={-0.08*window.innerHeight}>
                        <div className="link">Sponsors</div>
                    </Link>
                    <a
                    id="mlh-trust-badge"
                    style={{
                        display: 'block',
                        maxWidth: '100px',
                        minWidth: '60px',
                        position: 'fixed',
                        right: '50px',
                        top: '0',
                        width: '10%',
                        zIndex: 10000,
                    }}
                    href="https://mlh.io/na?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2024-season&utm_content=white"
                    target="_blank"
                    >
                    <img
                        src="https://s3.amazonaws.com/logged-assets/trust-badge/2024/mlh-trust-badge-2024-white.svg"
                        alt="Major League Hacking 2024 Hackathon Season"
                        style={{ width: '100%' }}
                    />
                    </a>
            </div>
            <Menu 
                isOpen={menuOpen}
                onStateChange={(state) => setMenuOpen(state.isOpen)}
            >
                <Link to="home-page" smooth={true}>
                    <div onClick={() => setMenuOpen(false)} className="link">Home</div>
                </Link>
                <Link to="schedule-page" smooth={true} offset={-0.04*window.innerHeight}> 
                    <div onClick={() => setMenuOpen(false)} className="link">Schedule</div>
                </Link>
                <Link to="faq-page" smooth={true} offset={-0.02*window.innerHeight}>
                    <div onClick={() => setMenuOpen(false)} className="link">FAQ</div>
                </Link>
                <Link to="prizes-page" smooth={true} offset={-0.02*window.innerHeight}>
                    <div onClick={() => setMenuOpen(false)} className="link">Prizes</div>
                </Link>
                <Link to="sponsors-page" smooth={true} offset={-0.04*window.innerHeight}>
                    <div onClick={() => setMenuOpen(false)} className="link">Sponsors</div>
                </Link>
            </Menu>
            </div>
        </nav>
    );
}
export default Navbar