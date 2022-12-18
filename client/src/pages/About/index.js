import React from "react";
import {Link} from "react-router-dom";
import "./style.css";

function About() {
    return(
        <div id = "about-page">
            <div className = "banner">
                <section id = "about-info">
                    <div>
                        <figure id ="portrait-box">
                            <img id = "portrait" src = "images/self-portrait.jpg" />
                        </figure>
                    </div>
                        <div>
                            <h1 className = "title">About Me</h1>
                            <p>
                                Hunter Wilkins is an artist, writer, singer, musician, game developer, and programmer.
                                With over ten years of experience in Adobe PhotoShop and four years of experience in Web Development, 
                                he's constantly learning new ways to meld together the creative and the practical.
                            </p>
                            <Link id = "resume" target = "_blank" to = "./images/Hunter Wilkins Resume V7.pdf">Resume</Link>
                        </div>
                </section>
            </div>
            <br />
            <div className="banner">
                <h2>hello</h2>
            </div>
    
        </div>
    )
}

export default About;