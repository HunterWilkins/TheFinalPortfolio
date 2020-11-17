import React from "react";
import "./style.css";

import FullImage from "../FullImage";

function Artwork(props) {

    function fixTitle(title) {
        return title.replace(/=|.jpg|.png|-Thumbnail/g," ");
    }

    return(
        <div id = "artwork-page">  
            {
             props.fullImageDisplay ? 
                <FullImage 
                    fullImageDisplay = {props.fullImageDisplay} 
                    src = {props.src} 
                    alt = {props.alt}
                    fullImageLoaded = {props.fullImageLoaded}
                    turnOffFullScreen = {props.turnOffFullScreen}
                    switchToImageLoaded = {props.switchToImageLoaded}
                    fullImages = {props.fullImages} 
                />
                :
                ""
            }
                     
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
                                        <figure onClick = {() => props.getFullSizedImage(thumbnail, item.genre)} className = "thumbnail-box">
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