import '../styles/Faq.css'
import React, { useEffect, useState } from "react";
import Faq from "react-faq-component";

const FaqPage = () => { 
    const data = {
    title: "FAQ",
    rows: [
        {
            title: "Q: What is HackCMU?",
            content: `100000% best hackathon at CMU, no cap my homies!!!!! This is the absolute truth and only the truth!!`,
        },
        {
            title: "Q: Where is HackCMU?",
            content:
                `Probably in Gates, but idk! No details at this point yet! We will probably figure this out at some point broskis!`,
        },
        {
            title: "Q: Why is HackCMU?",
            content: `We want free stuff! You want free stuff! It all works out! Less gooo!!!`,
        },
    ]
    }
    
    const config = {
        // animate: true,
        // arrowIcon: "V",
        // tabFocus: true
    };
    return (
        <div>
            <Faq
                data={data}
                styles={ '../styles/Faq.css'}
                config={config}
            />
        </div>
    );

}


 
export default FaqPage;