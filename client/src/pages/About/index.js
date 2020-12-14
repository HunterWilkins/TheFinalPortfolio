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
            {/* <div id = "current-projects">
                <h1>Current Projects...</h1>
               <br></br>
                <ul className = "banner">
                    <li>
                        <h3><strong>Spacepocalypse</strong> (Working Title) <em>- Video Game</em></h3>
                        <br></br>
                        <p className = "description">
                            In the distant future, Earth has been destroyed by something or other, it doesn't matter. 
                            What matters is that, in the fallout, one man is going to dedicate his life to saving 
                            his hometown from destruction. He's going to accomplish this by doing everyone's chores.
                            But they'll be <em>fun</em> chores.
                        </p>
                    </li>
                    <li>
                        <h3><strong>The Slaying of the Malrog</strong> (Working Title) <em>- Book</em></h3>                    
                        <br></br>
                        <p className = "description">
                            Every fantasy story has a prophecy or two floating about. What would happen, however, if a 
                            destined hero of fate noticed something fishy about his role? Destined to slay the evil Malrog, 
                            our hero arrives on the battlefield and sees only a harmless young woman. Sure, she attacks him, but 
                            she doesn't <em>look</em> like a monster. How will he get out of this crazy (and, dare I say, <em>zany</em>)
                            situation?
                        </p>
                    </li>
                </ul>
            </div> */}
            
        </div>
    )
}

export default About;