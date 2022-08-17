import '../styles/Navbar.css'
import { Link } from "react-scroll"

const Navbar = () => {    
    return (
        <nav className="navbar">
            <div className="navbar-content">
                <Link to="home-page" smooth={true}>
                    <div className="navbar-logo">HackCMU logo (put up later)</div>                
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
                </div>
            </div>
        </nav>
    );
}
export default Navbar