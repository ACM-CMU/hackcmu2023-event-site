import '../styles/Homepage.css'
import hero from '../images/hero.png'
const Homepage = () => { 
    return (  
        <div className="home-page">
            <div className="home-page-content">
                {/* <div className="home-page-center-content">
                    <div className="home-page-logo">HACKCMU 2022</div>
                    <div className="home-page-caption">PRESENTED BY ACM@CMU</div>
                </div> */}
                {/* <div className="home-page-circle-container">
                    <div className="home-page-circle" id="home-page-circle-1">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div> */}
                <div class="section" id="home">
                <div id="star-container">
                    <div id='stars'></div>
                    <div id='stars2'></div>
                    <div id='stars2a'></div>
                </div>
                </div>
                <img class="home-page-logo-pic" src={hero}  alt="hero" width="30%" />
                <div className="home-page-sign-up-links">
                    <a href="https://cmu.ca1.qualtrics.com/jfe/form/SV_2nrluKEiu0VOgLA?">
                        <div className="sign-up-button" id="participant-button">
                            Sign up as participant
                        </div>
                    </a>
                    {/* <a href="https://docs.google.com/forms/d/e/1FAIpQLScply9xc9dBY4Nqe4Sx8vLzkcKPFS8G3DqzRQ1CARIszV6sLw/viewformIvY25MYoZCe_gnEyYbWbCpebXs7MgHIKA/viewform">
                        <div className="sign-up-button" id="mentor-button">
                            Sign up as mentor
                        </div>
                    </a> */}
                </div>
            </div>
        </div>
    );
}
 
export default Homepage;    