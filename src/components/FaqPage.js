import "../styles/Faq.css";
import Faq from "react-faq-component";

const FaqPage = () => {
  const data = {
    rows: [
      {
        title: "Q: What is HackCMU?",
        content: `100000% best hackathon at CMU, no cap my homies!!!!! This is the absolute truth and only the truth!!`,
      },
      {
        title: "Q: Where is HackCMU?",
        content: `Probably in Gates, but idk! No details at this point yet! We will probably figure this out at some point broskis!`,
      },
      {
        title: "Q: Why is HackCMU?",
        content: `We want free stuff! You want free stuff! It all works out! Less gooo!!!`,
      },
      {
        title: "Q: How much does this cost?",
        content: `$0! We'll provide meals, snacks, drinks, and lots of swag, thanks to the support of our wonderful sponsors.`,
      },
      {
        title: "Q: I’m not a “hacker”, can I still participate?",
        content: `Students of all skill levels are encouraged to attend, even if you’ve never written a line of code! Creative individuals of all kinds are welcome to apply — such as designers, ECE majors, statistics, etc. The only requirement is your attitude to learn!`,
      },
      {
        title: "Q: Are there teams? Do I need one to sign up!",
        content: `Working as a team is highly encouraged, but not required. We'll be facilitating team-forming the day-of, so don't be discouraged if you don't have a team!`,
      },
      {
        title: "Q: How big can a team be?!",
        content: `Up to 4 people`,
      },
      {
        title: "Q: What are the rules? Can I work on my project ahead of time?",
        content: `All work must be original, and you are not permitted to start building or designing your project until the event. Brainstorming ideas and forming teams beforehand is fine, though.`,
      },
      {
        title: "Q: How can I be entered into the raffle?",
        content: `You'll be automatically entered into the raffle if you submit a project by the due date!`,
      },
      {
        title: "Q: Who runs this event?",
        content: `You can learn more about us over here.`,
      },
      {
        title: "Q: Any other questions, comments, or concerns?",
        content: `Email us at acm-exec[at]cs.cmu.edu.`,
      },
    ],
  };

  const config = {
    // animate: true,
    // arrowIcon: "V",
    // tabFocus: true
  };
  return (
    <div className="faq-page">
      <div className="faq-header"></div>{" "}
      {/* used to line up the scroll correctly */}
      <div className="faq-title">FAQ</div>
      <div className="faq-content">
        <Faq data={data} styles={"../styles/Faq.css"} config={config} />
      </div>
    </div>
  );
};

export default FaqPage;
