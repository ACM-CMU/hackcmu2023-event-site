import "../styles/Prizes.css";
import "react-slideshow-image/dist/styles.css";
import { Slide } from "react-slideshow-image";
import bluemech from '../images/prizes/blue-mech.jpg';
import telescope from '../images/prizes/telescope.jpg';
import starprojector from '../images/prizes/star-projector.jpg';
import spikeball from '../images/prizes/spikeball-set.jpg';
import skullcandy from '../images/prizes/skullcandy-earbuds.jpg';
import projector from '../images/prizes/projector.jpg';
import pinkblue from '../images/prizes/pink-blue.jpg';
import navywhite from '../images/prizes/navywhite.jpg';
import mouse from '../images/prizes/mouse.jpg';
import ledlight from '../images/prizes/led-light.jpg';
import isslegoset from '../images/prizes/iss-lego-set.jpeg';
import echodot from '../images/prizes/echo-dot.jpg';
import bobaplush from '../images/prizes/boba-plush.jpg';

const Prizes = () => {
  const data = [{"src": telescope, alt: "telescope"},
{"src" : starprojector, alt: "star projector"}, 
{"src" : spikeball, alt: "spike ball"},
{"src" : skullcandy, alt: "sckull candy earbuds"}]
  
  return (
    <div className="prizes-page">
      <div className="prizes-content">
        <div className="prizes-header"></div>
        <div className="prizes-title">Prizes</div>
        <div className="prizes-img-and-caption">
          <div className="prizes-caption">
            <div className="prizes-caption-header"></div>
            <div className="prizes-para">
              Here are the prizes in this year's prize pool! Prizes will be
              awarded to:
            </div>
            <br></br>
            <ul className="prizes-list">
              <li>• Top three best hack winners</li>
              <li>• Best "Space" hack (this year's theme)</li>
              <li>
                • A whopping <b>24</b> individual raffle winners
              </li>
            </ul>
          </div>
          <div className="prizes-caption-img-sep"></div>
          <Slide>
            <div className="each-slide-effect">
              <img  className="prizes-img-and-caption" src={telescope} alt="telescope" />
              <b> Telescope </b>
            </div>
            <div className="each-slide-effect">
            <img  className="prizes-img-and-caption" src={starprojector}  alt="star projector" />
            <b> Star Projector </b>
            </div>
            <div className="each-slide-effect">
            <img  className="prizes-img-and-caption" src={spikeball}  alt="spikeball set" />
            <b> Spikeball Set </b>
            </div>
            <div className="each-slide-effect">
              <img className="prizes-img-and-caption" src={skullcandy}  alt="skullcandy earbuds" />
              <b> Skullcandy Earbuds </b>
            </div>
            <div className="each-slide-effect">
              <img className="prizes-img-and-caption" src ={projector}  alt="projector" />
              <b> Projector </b>
            </div>
            <div className="each-slide-effect">
              <img className="prizes-img-and-caption" src={pinkblue}  alt="pink and blue octopus plush" />
              <b> Pink and Blue Octopus Plush </b>
            </div>
            <div className="each-slide-effect">
              <img className="prizes-img-and-caption" src={navywhite}  alt="navy and white octopus plush" />
              <b> Navy and White Octopus Plush </b>
            </div>
            <div className="each-slide-effect">
              <img className="prizes-img-and-caption"  src={mouse}  alt="mouse" />
              <b> Mouse </b>
            </div>
            <div className="each-slide-effect">
              <img className="prizes-img-and-caption" src={ledlight}  alt="led light" />
              <b> LED Light </b>
            </div>
            <div className="each-slide-effect">
              <img className="prizes-img-and-caption" src={isslegoset}  alt="iss lego set" />
              <b> ISS Lego Set </b>
            </div>
            <div className="each-slide-effect">
              <img className="prizes-img-and-caption" src={echodot}  alt="echo dot" />
              <b> Echo Dot </b>
            </div>
            <div className="each-slide-effect">
              <img className="prizes-img-and-caption" src={bobaplush}  alt="boba plush" />
              <b> Boba Plush </b>
            </div>
            <div className="each-slide-effect">
              <img className="prizes-img-and-caption" src={bluemech}  alt="blue mechanical keyboard" />
              <b> Blue Mechanical Keyboard </b>
            </div>
          </Slide>
        </div>
        <br></br>
        <br></br>
      </div>
    </div>
  );
};

export default Prizes;
