import "../styles/Prizes.css";
import "react-slideshow-image/dist/styles.css";
import { Slide } from "react-slideshow-image";
import bluemech from "../images/prizes/blue-mech.jpg";
import telescope from "../images/prizes/telescope.jpg";
import starprojector from "../images/prizes/star-projector.jpg";
import spikeball from "../images/prizes/spikeball-set.jpg";
import skullcandy from "../images/prizes/skullcandy-earbuds.jpg";
import projector from "../images/prizes/projector.jpg";
import pinkblue from "../images/prizes/pink-blue.jpg";
import navywhite from "../images/prizes/navywhite.jpg";
import mouse from "../images/prizes/mouse.jpg";
import ledlight from "../images/prizes/led-light.jpg";
import isslegoset from "../images/prizes/iss-lego-set.jpeg";
import echodot from "../images/prizes/echo-dot.jpg";
import bobaplush from "../images/prizes/boba-plush.jpg";

const prizes = [
  { image: telescope, title: "Telescope" },
  { image: projector, title: "Projector" },
  { image: skullcandy, title: "Skullcandy Earbuds" },
  { image: bluemech, title: "Blue Mechanical Keyboard" },
  { image: mouse, title: "Mouse" },
  { image: echodot, title: "Echo Dot" },
  { image: starprojector, title: "Star Projector" },
  { image: ledlight, title: "LED Light" },
  { image: spikeball, title: "Spikeball Set" },
  { image: isslegoset, title: "ISS Lego Set" },
  { image: pinkblue, title: "Pink and Blue Octopus Plush" },
  { image: navywhite, title: "Navy and White Octopus Plush" },
  { image: bobaplush, title: "Boba Plush" },
];

const Prizes = () => {
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
            {prizes.map((prize, index) => (
              <PrizeItem key={index} image={prize.image} title={prize.title} />
            ))}
          </Slide>
        </div>
        <br></br>
      </div>
    </div>
  );
};

export default Prizes;

const PrizeItem = ({ image, title }) => {
  return (
    <div className="each-slide-effect">
      <div className="prize-title">{title}</div>
      <div className="prize-img-container">
        <img
          id="prize-image"
          className="prizes-img-and-caption"
          src={image}
          alt={title}
        />
      </div>
    </div>
  );
};
