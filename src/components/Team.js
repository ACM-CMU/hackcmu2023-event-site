import "../styles/Team.css";
import neeha from '../images/team/neehakurelli.jpg'
import jesse from '../images/team/jesseding.jpg'
import jeffery from '../images/team/jefferyjohn.jpg'
import tanisha from '../images/team/tanishasaxena.jpg'
import aarav from '../images/team/aaravbajaj.jpg'

const Team = () => {
    return (
        <div className="team-page">
      <div className="team-header"></div>{" "}
      {/* used to line up the scroll correctly */}
      <div className="team-title">Team</div>
      <br></br>
      <div className="team-content">
      <div class="section" id="team">
            <div id="photos">
                <a href="https://www.linkedin.com/in/nkurelli/"><img src={neeha}
                        data-src={neeha} alt="Neeha Kurelli" width="10%" /></a>
                <a href="https://www.linkedin.com/in/jesse-ding/"><img src={jesse}
                    data-src={jesse} alt="Jesse Ding" width="10%" /></a>
                <a href="https://www.linkedin.com/in/jefferyjohn/"><img src={jeffery}
                    data-src={jeffery} alt="Jeffeyr John" width="10%" /></a>
                <a href="https://www.linkedin.com/in/tanishasaxena/"><img src={tanisha}
                    data-src={tanisha} alt="Tanisha Saxena" width="10%" /></a>
                <a href="https://www.linkedin.com/in/aarav-bajaj-408ab01b1/"><img src={aarav}
                    data-src={aarav} alt="Aarav Bajaj" width="10%" /></a>
            </div>
        </div>
      </div>
      <div className="team-footer"></div>
    </div>
        
    );
};

export default Team;
