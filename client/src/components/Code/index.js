import React, { cloneElement } from "react";
import "./style.css";

function Code(props) {

    const codeCards = [
        {
            href : "https://gigbook-p3.herokuapp.com/",
            github: "https://github.com/HunterWilkins/GigBook",
            title: "GigBook",
            img: "Gigbook-Icon.png",
            desc: "The Easiest Way for Venues and Artists to make Beautiful Music Together",
        },
        {
            href : "https://hunterwilkins.github.io/project_one/",
            github: "https://github.com/HunterWilkins/project_one",
            title: "Nusic",
            img: "Nusic-logo-transparent.png",
            desc: "Discover New Music Playing in Your Area",
        },

        {
            href: "https://bottomlessbox.herokuapp.com",
            github: "https://github.com/HunterWilkins/Bottomless-Box",
            title: "The Bottomless Box",
            img: "Icon.png",
            desc: "Inventory management and shopping lists made significantly less dull!",
        },
        {
            href : "https://memelodge.herokuapp.com",
            github: "https://github.com/HunterWilkins/memesite2.0",
            title: "MemeLodge",
            img: "Memelodge_Logo.png",
            desc: "The Premier Spot for MEMES and DIVISIVE POLITICAL DISCOURSE!",
        },
        {
            href : "https://rootbuyerremastered.herokuapp.com",
            github: "https://github.com/HunterWilkins/RootBuyerRemastered",
            title: "RootBuyer Remastered",
            img: "RootBuyer.png",
            desc: "An Unofficial Remastering of RootBuyer.com, using React.js",
        },

    ];

    return(
        <div id = "code-page">
            {
                codeCards.map(code => {
                    return (
                        <a href = {code.href} className = "code">
                            <p>{code.title}</p>
                            <img src = {"/images/icons/Code/" + code.img} alt = {code.title} />
                            <p>{code.desc}</p>
                        </a>
                    )
                })
            }
        </div>
    )
}

export default Code;