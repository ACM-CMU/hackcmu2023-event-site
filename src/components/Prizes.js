import '../styles/Prizes.css'
import 'react-slideshow-image/dist/styles.css'
import { Slide } from 'react-slideshow-image'

const Prizes = () => { 
    const images = [
        "../../imgs/mechkey-2.jpg", 
        "../../imgs/lego.jpg", 
        "../../imgs/echo.jpg", 
        "../../imgs/charger-2.jpg", 
        "../../imgs/pinkblueoctopus.jpg", 
        "../../imgs/grayblueoctopus.jpg", 
        "../../imgs/turtle.jpg", 
        "../../imgs/pinkbluenarwhal.jpg", 
        "../../imgs/blackwhitenarwhal.jpg"
    ];
    return (  
        <div className="prizes-page">
            <div className="prizes-content">
                <div className='prizes-header'></div>
                <div className='prizes-title'>prizes</div>
                <div className='prizes-img-and-caption'>
                    <div className='prizes-caption'>
                        <div className='prizes-caption-header'></div>
                        <div className='prizes-para'>Here are the prizes in this year's prize pool! Prizes will be awarded to:</div>
                        <br></br>
                        <ul className='prizes-list'>
                            <li>Top three best hack winners</li>
                            <li>Best "Gamification" hack (this year's theme)</li>
                            <li>A whopping <b>25</b> individual raffle winners</li>
                        </ul>  
                    </div>
                    <div className='prizes-caption-img-sep'></div>
                    <Slide>
                        <div className="each-slide-effect">
                            <div style={{ 'backgroundImage': `url(${images[0]})` }}>
                                <span>Mechanical Keyboard</span>
                            </div>
                        </div>
                        <div className="each-slide-effect">
                            <div style={{ 'backgroundImage': `url(${images[1]})` }}>
                                <span>LEGO Infinity Gauntlet</span>
                            </div>
                        </div>
                        <div className="each-slide-effect">
                            <div style={{ 'backgroundImage': `url(${images[2]})` }}>
                                <span>Echo Dot (4th Gen)</span>
                            </div>
                        </div>
                        <div className="each-slide-effect">
                            <div style={{ 'backgroundImage': `url(${images[3]})` }}>
                                <span>Portable Charger</span>
                            </div>
                        </div>
                        <div className="each-slide-effect">
                            <div style={{ 'backgroundImage': `url(${images[4]})` }}>
                                <span>Reversible Octopus Plush - Pink/Blue (raffle)</span>
                            </div>
                        </div>
                        <div className="each-slide-effect">
                            <div style={{ 'backgroundImage': `url(${images[5]})` }}>
                                <span>Reversible Octopus Plush - Gray/Blue (raffle)</span>
                            </div>
                        </div>
                        <div className="each-slide-effect">
                            <div style={{ 'backgroundImage': `url(${images[6]})` }}>
                                <span> Reversible Turtle Plush (raffle)</span>
                            </div>
                        </div>
                        <div className="each-slide-effect">
                            <div style={{ 'backgroundImage': `url(${images[7]})` }}>
                                <span>Reversible Narwhal Plush - Pink/Blue (raffle)</span>
                            </div>
                        </div>
                        <div className="each-slide-effect">
                            <div style={{ 'backgroundImage': `url(${images[8]})` }}>
                                <span>Reversible Narwhal Plush - Black/White (raffle)</span>
                            </div>
                        </div>
                    </Slide>
                </div>
                <br></br>
                <br></br>
            </div>
        </div>
    );
}
 
export default Prizes;    