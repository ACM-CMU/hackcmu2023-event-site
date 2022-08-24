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
                <img className="home-page-logo-pic" src="../../hackcmu-logo-black-short.png">
                </img>
                <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
                    <div className="sign-up-button">
                        Sign up now!
                    </div>
                </a>
            </div>
        </div>
    );
}
 
export default Homepage;    