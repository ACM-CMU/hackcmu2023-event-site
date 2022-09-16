import ReactDOMServer from "react-dom/server";
import "../styles/Schedule.css";

const fridaySchedule = () => {
  return (
    <div>
      <div class="schedule-event main-event">
        <div class="col">
          <p>5:30 - 6:00 PM</p>
        </div>
        <div class="col">
          <p>Check-in</p>
          <p class="details">Outside Rashid Auditorium</p>
        </div>
      </div>
      <div class="schedule-event main-event">
        <div class="col">
          <p>6:00 - 6:30 PM</p>
        </div>
        <div class="col">
          <p>Opening Ceremony</p>
          <p class="details">Rashid Auditorium</p>
        </div>
      </div>
      <div class="schedule-event food">
        <div class="col">
          <p>6:30 - 7:30 PM</p>
        </div>
        <div class="col">
          <p>Dinner - Bull River Tacos (Taco Truck)</p>
          <p class="details">Outside NSH</p>
        </div>
      </div>
      <div class="schedule-event workshops">
        <div class="col">
          <p>8:00 - 8:30 PM</p>
        </div>
        <div class="col">
          <p>Workshop 1</p>
          <p class="details">Rashid Auditorium (Beginner)</p>
          <p class="details">ASA Conference Room (Advanced)</p>
        </div>
      </div>
      <div class="schedule-event workshops">
        <div class="col">
          <p>8:45 - 9:30 PM</p>
        </div>
        <div class="col">
          <p>Workshop 2</p>
          <p class="details">Rashid Auditorium (Beginner)</p>
          <p class="details">ASA Conference Room (Advanced)</p>
        </div>
      </div>
      <div class="schedule-event food">
        <div class="col">
          <p>11:00 PM</p>
        </div>
        <div class="col">
          <p>Midnight Snacks - Waffalonia</p>
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
          <p>9:30 - 10:00 AM</p>
        </div>
        <div class="col">
          <p>Breakfast - Bruegger's Bagels</p>
          <p class="details">Reddy Conference Room</p>
        </div>
      </div>
      <div class="schedule-event food">
        <div class="col">
          <p>12:00 - 1:00 PM</p>
        </div>
        <div class="col">
          <p>Lunch - Mineo's Pizza</p>
          <p class="details">Reddy Conference Room</p>
        </div>
      </div>
      <div class="schedule-event main-event">
        <div class="col">
          <p>2:00 - 3:00 PM</p>
        </div>
        <div class="col">
          <p>Sponsor Fair & BOBA</p>
          <p class="details">Simmons B</p>
        </div>
      </div>
      <div class="schedule-event main-event">
        <div class="col">
          <p>3:30 - 5:45 PM</p>
        </div>
        <div class="col">
          <p>Expo Setup</p>
          <p class="details">Simmons A & B</p>
        </div>
      </div>
      <div class="schedule-event main-event">
        <div class="col">
          <p>6:00 - 7:30 PM</p>
        </div>
        <div class="col">
          <p>Judging</p>
          <p class="details">Simmons A & B</p>
        </div>
      </div>
      <div class="schedule-event food">
        <div class="col">
          <p>7:30 - 8:00 PM</p>
        </div>
        <div class="col">
          <p>Dinner - 98K Hamburger</p>
          <p class="details">Reddy Conference Room</p>
        </div>
      </div>
      <div class="schedule-event main-event">
        <div class="col">
          <p>8:00 PM</p>
        </div>
        <div class="col">
          <p>Closing Ceremony</p>
          <p class="details">Simmons A & B</p>
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
        <div className="schedule-title">schedule</div>
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
            <span class="schedule-header-word">FRIDAY 9/16</span>
          </button>
          <button
            class="schedule-day-button"
            id="saturday"
            onClick={showSaturday}
          >
            <span class="schedule-header-word">SATURDAY 9/17</span>
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
