import ReactDOMServer from "react-dom/server";
import "../styles/Schedule.css";

const fridaySchedule = () => {
  return (
    <div>
      <div class="schedule-event main-event2">
        <div class="col">
          <p>5:30 - 6:00 PM</p>
        </div>
        <div class="col">
          <p>Check-in / Team Match A</p>
          <p class="details">Tepper 1101</p>
          <p class="details">Check in with organizers and find team members</p>
        </div>
      </div>
      <div class="schedule-event main-event2">
        <div class="col">
          <p>6:00 - 6:30 PM</p>
        </div>
        <div class="col">
          <p>Opening Ceremony</p>
          <p class="details">Tepper 1101</p>
          <p class="details">Join us for the opening ceremony of HackCMU 2023!</p>
        </div>
      </div>
      <div class="schedule-event foods">
        <div class="col">
          <p>7:00 - 9:00 PM</p>
        </div>
        <div class="col">
          <p>Dinner & Sponsor Fair</p>
          <p class="details">Tepper 1101</p>
          <p class="details">Meet our amazing event sponsors!</p>
        </div>
      </div>
      <div class="schedule-event workshop">
        <div class="col">
          <p>9:00 - 9:30 PM</p>
        </div>
        <div class="col">
          <p>Workshop A</p>
        </div>
      </div>
      <div class="schedule-event workshop">
        <div class="col">
          <p>9:00 - 9:25 PM</p>
        </div>
        <div class="col">
          <p>Team Matching B/ Cup Stacking (MLH)</p>
        </div>
      </div>
      <div class="schedule-event workshop">
        <div class="col">
          <p>9:30 - 10:00 PM</p>
        </div>
        <div class="col">
          <p>Workshop B</p>
        </div>
      </div>
      <div class="schedule-event workshop">
        <div class="col">
          <p>9:30 - 10:00 PM</p>
        </div>
        <div class="col">
          <p>Orbital Edge Computing | Machine Learning (GDSC)</p>
          <p class="details">Interested in learning TensorFlow? Come <a href="https://gdsc.community.dev/events/details/developer-student-clubs-carnegie-mellon-university-presents-gdsc-presents-machine-learning-in-tensorflow-a-hackcmu-workshop/" class="custom-link">attend our workshop</a> with GDSC!</p>
        </div>
      </div>
      <div class="schedule-event workshop">
        <div class="col">
          <p>10:00 - 10:25 PM</p>
        </div>
        <div class="col">
          <p>Meet the Team (ACM) | Capture the Flag (picoCTF)</p>
        </div>
      </div>
      <div class="schedule-event workshop">
        <div class="col">
          <p>10:30 - 11:00 PM</p>
        </div>
        <div class="col">
          <p>Workshop C</p>
        </div>
      </div>
      <div class="schedule-event foods">
        <div class="col">
          <p>12:00 - 1:00 AM</p>
        </div>
        <div class="col">
          <p>Midnight Snack</p>
          <p class="details">Scavengar Hunt!</p>
        </div>
      </div>
    </div>
  );
};

const saturdaySchedule = () => {
  return (
    <div>
      <div class="schedule-event foods">
        <div class="col">
          <p>8:00 - 10:00 AM</p>
        </div>
        <div class="col">
          <p>Breakfast</p>
          <p class="details">Tepper 1101</p>
          <p class="details">Get breakfast after a long night of hacking!</p>
        </div>
      </div>
      <div class="schedule-event foods">
        <div class="col">
          <p>10:00 - 10:30 AM</p>
        </div>
        <div class="col">
          <p>The Trade Desk Info Session</p>
        </div>
      </div>
      <div class="schedule-event foods">
        <div class="col">
          <p>10:30 - 11:00 AM</p>
        </div>
        <div class="col">
          <p>Sandia National Labs Info Session</p>
        </div>
      </div>
      <div class="schedule-event workshop">
        <div class="col">
          <p>10:00 - 11:30 PM</p>
        </div>
        <div class="col">
          <p>Sponsor Workshops</p>
        </div>
      </div>
      <div class="schedule-event foods">
        <div class="col">
          <p>12:00 - 1:00 PM</p>
        </div>
        <div class="col">
          <p>Lunch</p>
        </div>
      </div>
      <div class="schedule-event main-event2">
        <div class="col">
          <p>1:00 PM</p>
        </div>
        <div class="col">
          <p>Project Submission Deadline</p>
          <p class="details">Devpost</p>
          <p class="details">Submit your project by 1:00 PM on Devpost</p>
        </div>
      </div>
      <div class="schedule-event main-event2">
        <div class="col">
          <p>2:00 - 2:30 PM</p>
        </div>
        <div class="col">
          <p>Judging</p>
        </div>
      </div>
      <div class="schedule-event main-event2">
        <div class="col">
          <p>3:00 - 4:00 PM</p>
        </div>
        <div class="col">
          <p>Expo</p>
        </div>
      </div>
      <div class="schedule-event main-event2">
        <div class="col">
          <p>4:00 - 5:00 PM</p>
        </div>
        <div class="col">
          <p>Closing Ceremony</p>
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
            <div class="legend-box foods"></div>
            <p class="legend-label">Food</p>
          </div>
          <div class="legend-event">
            <div class="legend-box main-event2"></div>
            <p class="legend-label">Main Event</p>
          </div>
          <div class="legend-event">
            <div class="legend-box workshop"></div>
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
