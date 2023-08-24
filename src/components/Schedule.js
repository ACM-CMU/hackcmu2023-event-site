import ReactDOMServer from "react-dom/server";
import "../styles/Schedule.css";

const fridaySchedule = () => {
  return (
    <div>
      <div class="schedule-event main-event">
        <div class="col">
          <p>5:00 - 5:45 PM</p>
        </div>
        <div class="col">
          <p>Check-in</p>
          <p class="details">Tepper 1101</p>
        </div>
      </div>
      <div class="schedule-event main-event">
        <div class="col">
          <p>6:00 - 6:30 PM</p>
        </div>
        <div class="col">
          <p>Opening Ceremony</p>
          <p class="details">Tepper 1101</p>
          <p class="details">Join us for the opening ceremony of HackCMU 2023!</p>
        </div>
      </div>
      <div class="schedule-event food">
        <div class="col">
          <p>7:00 - 9:00 PM</p>
        </div>
        <div class="col">
          <p>Dinner & Sponsor Fair</p>
          <p class="details">Tepper 1101</p>
          <p class="details">Meet our amazing event sponsors!</p>
        </div>
      </div>
      <div class="schedule-event workshops">
        <div class="col">
          <p>9:30 - 10:00 PM</p>
        </div>
        <div class="col">
          <p>Workshop A / Team Match B</p>
          <p class="details">GHC 2401</p>
          <p>Workshop B</p>
          <p class="details">CIC 1201</p>
          <p>Workshop C</p>
          <p class="details">NSH 1301</p>
        </div>
      </div>
      <div class="schedule-event food">
        <div class="col">
          <p>12:00 - 1:00 PM</p>
        </div>
        <div class="col">
          <p>Midnight Snack</p>
          <p class="details">Gates La Prima</p>
        </div>
      </div>
    </div>
  );
};

const saturdaySchedule = () => {
  return (
    <div>
      <div class="schedule-event food">
        <div class="col">
          <p>8:00 - 10:00 AM</p>
        </div>
        <div class="col">
          <p>Breakfast</p>
          <p class="details">Tepper 1101</p>
          <p class="details">Get breakfast after a long night of hacking!</p>
        </div>
      </div>
      <div class="schedule-event main-event">
        <div class="col">
          <p>11:00 - 11:30 PM</p>
        </div>
        <div class="col">
          <p>Project Submission Deadline</p>
          <p class="details">Devpost</p>
        </div>
      </div>
      <div class="schedule-event main-event">
        <div class="col">
          <p>12:00 - 1:30 PM</p>
        </div>
        <div class="col">
          <p>Lunch & Project Expo</p>
          <p class="details">Tepper 1101</p>
        </div>
      </div>
      <div class="schedule-event main-event">
        <div class="col">
          <p>2:00 - 2:30 PM</p>
        </div>
        <div class="col">
          <p>Closing Ceremony</p>
          <p class="details">Tepper 1101</p>
          <p class="details">We hope you continue to reach for the stars after our event :)</p>
        </div>
      </div>
    </div>
  );
};

function showFriday() {
  document.getElementById("friday").style.border = "3px solid white";
  document.getElementById("saturday").style.border = "0px solid white";
  document.getElementById("schedule").innerHTML =
    ReactDOMServer.renderToStaticMarkup(fridaySchedule());
}

function showSaturday() {
  document.getElementById("friday").style.border = "0px solid white";
  document.getElementById("saturday").style.border = "3px solid white";
  document.getElementById("schedule").innerHTML =
    ReactDOMServer.renderToStaticMarkup(saturdaySchedule());
}

const Schedule = () => {
  return (
    <div className="schedule-page">
      <div className="schedule-content">
        <div className="schedule-header"></div>
        <div className="schedule-title">Schedule</div>
        <div class="legend">
          <div class="legend-event">
            <div class="legend-box food"></div>
            <p class="legend-label">Food</p>
          </div>
          <div class="legend-event">
            <div class="legend-box main-event"></div>
            <p class="legend-label">Main Event</p>
          </div>
          <div class="legend-event">
            <div class="legend-box workshops"></div>
            <p class="legend-label">Workshop</p>
          </div>
        </div>
        <div class="schedule-days">
          <button class="schedule-day-button" id="friday" onClick={showFriday}>
            <span class="schedule-header-word">FRIDAY 9/15</span>
          </button>
          <button
            class="schedule-day-button"
            id="saturday"
            onClick={showSaturday}
          >
            <span class="schedule-header-word">SATURDAY 9/16</span>
          </button>
        </div>
        <div class="schedule" id="schedule">
          {fridaySchedule()}
        </div>
        <div className="container-after"></div>
      </div>
    </div>
  );
};

export default Schedule;
