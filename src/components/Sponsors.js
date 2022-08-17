import '../styles/Sponsors.css'
const Sponsors = () => { 

    return (
        <div className="sponsors-page">
            <div className="sponsors-header"></div> {/* used to line up the scroll correctly */}
            <div className='sponsors-title'>SPONSORS</div>
            <div className='sponsors-level'>GOLD</div>
            <div className='sponsors sponsors-gold'>
                <a href="https://www.microsoft.com/en-us/">
                    <img src="../../microsoft-logo2.png" alt="sponsors"/>
                    </a>
                <a href="https://www.citadel.com">
                    <img src="../../citadel-logo.png" alt="sponsors"/>
                    </a>
                <a href="https://www.hudsonrivertrading.com/">
                    <img src="../../hrt-logo-cropp.png" alt="sponsors"/>
                    </a>
                <a href="https://www.bloomberg.com/">
                    <img src="../../bloomberg-logo-blue.png" alt="sponsors"/>
                    </a>
                <a href="https://www.janestreet.com/">
                    <img src="../../janestreet-cropped.png" alt="sponsors"/>
                    </a>
                <a href="https://www.aptiv.com">
                    <img src="../../aptiv-cropped.png" alt="sponsors"/>
                    </a>
            </div>
            <div className='sponsors-level'>SILVER</div>
            <div className='sponsors sponsors-silver'>
                <a href="https://www.oldmissioncapital.com/">
                    <img src="../../omc-logo.png" alt="sponsors"/>
                    </a>
            </div>
            <div className='sponsors-level'>BRONZE</div>
            <div className='sponsors sponsors-bronze'>
                <a href="https://www.scm-lp.com/">
                    <img src="../../scm-logo.png" alt="sponsors"/>
                    </a>
            </div>
            <div className="sponsors-footer"></div> {/* used to line up the scroll correctly */}
        </div>
    );

}


 
export default Sponsors;