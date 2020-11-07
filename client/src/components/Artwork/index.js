import React from "react";
import "./style.css";
import axios from "axios";
function Artwork(props) {
    console.log("This is the genres array: " + props.genres);

    async function getArt() {
        const artwork = await axios.get("/api/art");
        console.log(artwork);
    }

    function fixTitle(title) {
        return title.replace(/=|.jpg|.png|-Thumbnail/g," ");
    }

    return(
        <div id = "artwork-page">           
            <section id = "gallery">
                {
                    props.genres.map(item => {
                        return(
                        <section>
                        
                            <h1 className = "genre-title">{item.genre}</h1>
                            <section className = "thumbnails">
                                {
                                    item.thumbnails.map(thumbnail => {
                                        return( 
                                        <figure className = "thumbnail-box">
                                                <p className = "thumbnail-title">{fixTitle(thumbnail)}</p>
                                                <img className = "thumbnail" src = {"/images/Artwork/" + item.genre + "/thumbnails/" + thumbnail} alt = {thumbnail}></img>
                                        </figure>
                                        )
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