import React from "react";
import "./style.css";

function Code(props) {

    const codeCards = [
        {
            href : "https://gigbook-p3.herokuapp.com/",
            github: "https://github.com/HunterWilkins/GigBook",
            title: "GigBook",
            img: "Gigbook-Icon.png",
            desc: "The Easiest Way for Venues and Artists to make Beautiful Music Together",
            tech: ["Node.js", "JavaScript", "CSS3", "Express", "MySQL", "Sequelize"]
        },
        {
            href : "https://hunterwilkins.github.io/project_one/",
            github: "https://github.com/HunterWilkins/project_one",
            title: "Nusic",
            img: "Nusic-logo-transparent.png",
            desc: "Discover New Music Playing in Your Area",
            tech: ["JavaScript", "HTML5", "CSS3"]
        },

        {
            href: "https://bottomlessbox.herokuapp.com",
            github: "https://github.com/HunterWilkins/Bottomless-Box",
            title: "The Bottomless Box",
            img: "Icon.png",
            desc: "Inventory management and shopping lists made significantly less dull!",
            tech: ["Node.js", "JavaScript", "CSS3", "Express", "React.js"]
        },
        {
            href : "https://memelodge.herokuapp.com",
            github: "https://github.com/HunterWilkins/memesite2.0",
            title: "MemeLodge",
            img: "Memelodge_Logo.png",
            desc: "The Premier Spot for MEMES and DIVISIVE POLITICAL DISCOURSE!",
            tech: ["Node.js", "JavaScript", "CSS3", "Express", "MongoDB", "Mongoose", "Handlebars.js"]
        },
        {
            href : "https://rootbuyerremastered.herokuapp.com",
            github: "https://github.com/HunterWilkins/RootBuyerRemastered",
            title: "RootBuyer Remastered",
            img: "RootBuyer.png",
            desc: "An Unofficial Remastering of RootBuyer.com, using React.js",
            tech: ["Node.js", "JavaScript", "CSS3", "Express", "MongoDB", "Mongoose", "React.js"]
        },
        {
            href: "http://tardyblom.com",
            github: "https://github.com/HunterWilkins/TheGoodStuff",
            title: "Tardyblom",
            img: "Tardyblom-Logo.png",
            desc: "My official blog site!",
            tech: ["Node.js", "JavaScript", "CSS3", "Express", "MySQL", "Sequelize", "React.js", "React Hooks"]
        }

    ];

    return(
        <div id = "code-page">
            {
                codeCards.map(code => {
                    return (
                        <div href = {code.href} className = "code">
                            <span className = "code-topper">
                                <h2>{code.title}</h2>
                                <a className = "icon-wrapper" href = {code.github} target = "__blank">
                                    <img src = {"/images/icons/github-icon.png"} alt = "github icon" />
                                </a>
                            </span>
                            
                            <a className = "deployed-icon-wrapper" href = {code.href} target = "__blank">
                                <img className = "deployed-icon" src = {"/images/icons/Code/" + code.img} alt = {code.title} />
                            </a>
                            <p className = "code-desc">{code.desc}</p>
                            <br></br>
                            <section className = "tech-tags">
                                {
                                    code.tech.map(item => {
                                        return(
                                            <span>{item}</span>
                                        )
                                    })
                                }
                            </section>
                           
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Code;