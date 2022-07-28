import '../styles/Homepage.css'

const Homepage = () => { 
    return (  
        <div className="home-page">
            <div className="home-page-content">
                <div className="home-page-center-content">
                    <div className="home-page-logo">HackCMU 2022</div>
                    <div className="home-page-caption">Presented by ACM@CMU</div>
                </div>
                <div className="home-page-circle-container">
                    <div className="home-page-circle" id="home-page-circle-1">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Homepage;    