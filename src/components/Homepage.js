import '../styles/Homepage.css'
import hero from '../images/hero.png'
import cyberpunk from '../images/2024cyberpunk.png'

const Homepage = () => { 
    return (  
        <div className="home-page">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/fullPage.js/4.0.20/fullpage.css"
            integrity="sha512-wCVOuVtxsXqrQK7tj9j4BvyfITQmpp7UE7mVilD7aieGLYFEIAa5UKTP1RapOf6dxQ9JIKAneakcyykWG4r4Ow=="
            crossorigin="anonymous" referrerpolicy="no-referrer" />

            <div className="home-page-content">
                <div className="section" id="home">
                    {/* Section content here */}
                </div>
                <img className="home-page-logo-pic" src={cyberpunk} alt="hero" />

                <div className="home-page-sign-up-links">
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLSevS-JRXkp0jOwKZIhcYjlWa4HFXfzoSBbqc7lxhJ4o0WPKeQ/viewform?usp=send_form">
                        <div className="sign-up-button" id="participant-button">
                            <p className='sign-up-text'>REGISTER</p>
                        </div>
                    </a>
                    {/* <a href="https://docs.google.com/forms/d/e/1FAIpQLScply9xc9dBY4Nqe4Sx8vLzkcKPFS8G3DqzRQ1CARIszV6sLw/viewformIvY25MYoZCe_gnEyYbWbCpebXs7MgHIKA/viewform">
                        <div className="sign-up-button" id="mentor-button">
                            Sign up as mentor
                        </div>
                    </a> */}
                </div>
            </div>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/fullPage.js/4.0.20/fullpage.min.js"
            integrity="sha512-LGiXf+jHGTHcIybSsOWO3I/in+OObCkcEsWIZ7IyhzfD6RzD5qDUw2CK+JveuI7zTSEcDG//bIOvOpAJW2BWsg=="
            crossorigin="anonymous" referrerpolicy="no-referrer"></script>
        </div>
    );
}

export default Homepage;
