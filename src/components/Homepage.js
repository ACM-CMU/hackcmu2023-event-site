import '../styles/Homepage.css'

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
                <img className="home-page-logo-pic" src="../../hackcmu.png">
                </img>
                <div className="home-page-sign-up-links">
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLSdiA-v8H8oi1hh772syQN3LFGJcmjPdB0UWXkf2PDzYFFbn_A/viewform">
                        <div className="sign-up-button" id="participant-button">
                            Sign up as participant
                        </div>
                    </a>
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLScX-NCAK0L8a-TkTIvY25MYoZCe_gnEyYbWbCpebXs7MgHIKA/viewform">
                        <div className="sign-up-button" id="mentor-button">
                            Sign up as mentor
                        </div>
                    </a>
                </div>
            </div>
        </div>
    );
}
 
export default Homepage;    