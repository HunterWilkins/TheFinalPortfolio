import React from "react";
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
                                With over ten years of experience in Adobe PhotoShop and two years of experience in Web Development, 
                                he's constantly learning new ways to meld together the creative and the practical.
                            </p>
                        </div>
                        
                </section>
            </div>
     
            <br></br>

            <a id = "resume" target = "_blank" href = "./images/Hunter Wilkins Resume V5.pdf">Resume</a>
        </div>
    )
}

export default About;