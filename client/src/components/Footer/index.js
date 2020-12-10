import React from "react";
import "./style.css";

function Footer() {
    let footerIcons = [
        {
            icon: "github-icon.png",
            url: "https://github.com/HunterWilkins"
        },
        {
            email: "wilkins.hunter@gmail.com"
        },
        {
            icon: "linkedin-icon.png",
            url: "https://www.linkedin.com/in/hunter-wilkins-591047117/"
        }
    ];

    return(
        <footer>
            {
                footerIcons.map(item => {
                    if (item.email) {
                        return (
                            <p>{item.email}</p>
                        )
                    }

                    else {
                    
                        return (
                            <a className = "icon" target = "_blank" href = {item.url}><img src = {"/images/icons/" + item.icon} alt = {item.icon} /></a>
                        )
                    }
                })
            }
        </footer>
    )
}
export default Footer;