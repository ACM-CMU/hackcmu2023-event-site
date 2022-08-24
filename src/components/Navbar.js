import '../styles/Navbar.css'
import { Link } from "react-scroll"

const Navbar = () => {    
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
                        <span>2</span>
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
                </div>
            </div>
        </nav>
    );
}
export default Navbar