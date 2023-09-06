import '../styles/Homepage.css'
import hero from '../images/hero.png'
const Homepage = () => { 
    return (  
        <div className="home-page">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/fullPage.js/4.0.20/fullpage.css"
        integrity="sha512-wCVOuVtxsXqrQK7tj9j4BvyfITQmpp7UE7mVilD7aieGLYFEIAa5UKTP1RapOf6dxQ9JIKAneakcyykWG4r4Ow=="
        crossorigin="anonymous" referrerpolicy="no-referrer" />

            <div className="home-page-content">
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
                            <p className='sign-up-text'> Sign up as participant </p>
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

<script src="https://cdnjs.cloudflare.com/ajax/libs/fullPage.js/4.0.20/fullpage.min.js"
integrity="sha512-LGiXf+jHGTHcIybSsOWO3I/in+OObCkcEsWIZ7IyhzfD6RzD5qDUw2CK+JveuI7zTSEcDG//bIOvOpAJW2BWsg=="
crossorigin="anonymous" referrerpolicy="no-referrer"></script>

export default Homepage;    