import React from "react";
import "./style.css";
import axios from "axios";
function Artwork(props) {
    console.log("This is the genres array: " + props.genres);

    async function getArt() {
        const artwork = await axios.get("/api/art");
        console.log(artwork);
    }

    return(
        <div id = "artwork-page">
            <h1>Artwork</h1>
            <div id = "test-div">
                <p>Whoa dude</p>
            </div>
            <section id = "gallery">
                {
                    props.genres.map(item => {
                        return(
                        <section>
                        
                            <h1>{item.genre}</h1>
                            <section>
                                {
                                    item.thumbnails.map(thumbnail => {
                                        return <img src = {"/images/Artwork/" + item.genre + "/thumbnails/" + thumbnail} alt = {thumbnail}></img>
                                    })
                                }
                            </section>
                        </section>
                        )
                    })
                }
            </section>
        </div>
    )
}

export default Artwork;