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
  const images = [
    "../../imgs/mechkey-2.jpg",
    "../../imgs/lego.jpg",
    "../../imgs/echo.jpg",
    "../../imgs/charger-2.jpg",
    "../../imgs/pinkblueoctopus.jpg",
    "../../imgs/grayblueoctopus.jpg",
    "../../imgs/turtle.jpg",
    "../../imgs/pinkbluenarwhal.jpg",
    "../../imgs/blackwhitenarwhal.jpg",
    "../../imgs/spikeball.png",
  ];
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
              Telescope
            </div>
            <div className="each-slide-effect">
            <img  className="prizes-img-and-caption" src={starprojector}  alt="star projector" />
              Star Projector
            </div>
            <div className="each-slide-effect">
            <img  className="prizes-img-and-caption" src={spikeball}  alt="spikeball set" />
              Spikeball Set
            </div>
            <div className="each-slide-effect">
              <img className="prizes-img-and-caption" src={skullcandy}  alt="skullcandy earbuds" />
              Skullcandy Earbuds
            </div>
            <div className="each-slide-effect">
              <img className="prizes-img-and-caption" src ={projector}  alt="projector" />
              Projector
            </div>
            <div className="each-slide-effect">
              <img className="prizes-img-and-caption" src={pinkblue}  alt="pink and blue octopus plush" />
              Pink and Blue Octopus Plush
            </div>
            <div className="each-slide-effect">
              <img className="prizes-img-and-caption" src={navywhite}  alt="navy and white octopus plush" />
              Navy and White Octopus Plush
            </div>
            <div className="each-slide-effect">
              <img className="prizes-img-and-caption"  src={mouse}  alt="mouse" />
              Mouse
            </div>
            <div className="each-slide-effect">
              <img className="prizes-img-and-caption" src={ledlight}  alt="led light" />
              LED Light
            </div>
            <div className="each-slide-effect">
              <img className="prizes-img-and-caption" src={isslegoset}  alt="iss lego set" />
              ISS Lego Set
            </div>
            <div className="each-slide-effect">
              <img className="prizes-img-and-caption" src={echodot}  alt="echo dot" />
              Echo Dot
            </div>
            <div className="each-slide-effect">
              <img className="prizes-img-and-caption" src={bobaplush}  alt="boba plush" />
              Boba Plush
            </div>
            <div className="each-slide-effect">
              <img className="prizes-img-and-caption" src={bluemech}  alt="blue mechanical keyboard" />
              Blue Mechanical Keyboard
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
