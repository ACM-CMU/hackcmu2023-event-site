import '../styles/Faq.css'

const Faq = () => { 
    return (  
        <div className="faq-page">
            <div className="faq-content">
                <div className='faq-header'></div>
                <div className='faq-title'>FAQ</div>
                <div className='faq-content-questions-answers'>
                    <div className='faq-q-a-container'>
                        <div className='faq-q'>Q: What is HackCMU?</div>
                        <div className='faq-a'>100000% best hackathon at CMU, no cap my homies!!!!! This is the absolute truth and only the truth!!</div>
                    </div>
                    <div className='faq-q-a-container'>
                        <div className='faq-q'>Q: Where is HackCMU?</div>
                        <div className='faq-a'>Probably in Gates, but idk! No details at this point yet! We will probably figure this out at some point broskis!</div>
                    </div>
                    <div className='faq-q-a-container'>
                        <div className='faq-q'>Q: Why is HackCMU?</div>
                        <div className='faq-a'>We want free stuff! You want free stuff! It all works out! Less gooo!!!</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Faq;    