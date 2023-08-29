import "../styles/Faq.css";
import Faq from "react-faq-component";

const FaqPage = () => {
  const data = {
    rows: [
      {
        title: "Q: What is HackCMU?",
        content: `HackCMU is a 24-hour event where students from across campus come together to make something awesome — like an app, website or hardware hack.`,
      },
      {
        title: "Q: What is this year's theme?",
        content: `This year's theme is "Space"!`,
      },
      {
        title: "Q: Should I sign up as a participant or mentor?",
        content: `Mentors are more experienced hackers who will assist the participants in creating their projects, instead of participating themselves! Mentors will be responsible for holding office hours and helping assigned groups. As a reward, they will receive additional goodies (like gift cards and swag bags), and they will also be eligible for the "coolest mentor" award!`,
      },
      {
        title: "Q: Where will HackCMU be held?",
        content: `HackCMU will mostly place in Tepper Simmons, but there are also designated hacking areas in Gates!`,
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
        content: `You can learn more about us at acmatcmu.com.`,
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
      <div className="faq-footer"></div>
    </div>
  );
};

export default FaqPage;
