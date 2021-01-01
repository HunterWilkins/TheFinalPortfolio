import React from "react";
import {Link} from "react-router-dom";
// import "./style.css";

function About() {
    return(
        <div id = "about-page">
            <div className = "banner">
                <section id = "about-info">
                    <div>
                        {/* <figure id ="portrait-box">
                            <img id = "portrait" src = "images/self-portrait.jpg" />
                        </figure> */}
                        <p>as;dlfkjas;dlfkja;sldkfja;lsdkjfa;lsdkjf;alskdjf;alskdjf;laksdjf
                            ;alsdkjfa;lsdkfj;alskdjf;alskdjf;alskdjf;alskdjf;alkdsfj;asldkfja;lsdkjf
                            a;lsdkfja;ldksfja;sldkjf;alskdjf;alskdjf;alskdjf;alskdjf;alskdjf;alskdjf;alsdkjf
                            ;alsdkjfa;lsdkfj;alskdjf;alksdjf;alskdjf;alskdjf;alskdjf;aldksjfa;lskdjf;alskdjf;alksjdf
                            ;alsdkfj;alsdkjf;alsdkjf;alksdjf;alskdjf;laskdjf;laksdjf;alkdsjf;laskdjf;alskdjf;alskdjf;alskjd
                            ;alsdkfja;lsdkjf;alksdjf;alskdjf;alskdjf;alkdsjf;laksdjf;laksjdf;laksjdf;laksjdf;lakjsdf
                        </p>
                    </div>
                        <div>
                            <h1 className = "title">About Me</h1>
                            <p>
                                Hunter Wilkins is an artist, writer, singer, musician, game developer, and programmer.
                                With over ten years of experience in Adobe PhotoShop and two years of experience in Web Development, 
                                he's constantly learning new ways to meld together the creative and the practical.
                            </p>
                            <Link id = "resume" target = "_blank" to = "./images/Hunter Wilkins Resume V5.pdf">Resume</Link>

                        </div>

                </section>
            </div>
    
        </div>
    )
}

export default About;