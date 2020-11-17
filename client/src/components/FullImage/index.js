import React from "react";
import "./style.css";

function FullImage(props) {
    console.log("Full Image Loaded: " + props.fullImageLoaded);
    return(
        <div onClick = {() => props.turnOffFullScreen()} id = "full-image-box" style = {props.fullImageDisplay ? {display: "flex"} : {display: "none"}}>
            <h1>This is the Full Screen</h1>
            <figure id = "full-image-figure" style = {{backgroundImage: "url('/images/icons/loading.gif')"}}>
                <img onLoad = {() => {
                    console.log("Image Loaded");
                    props.switchToImageLoaded(true)
                }} 
                    id = "full-image" 
                    src = {props.src} 
                    alt = {props.alt} 
                    style = {props.fullImageLoaded ? {display: "block"} : {display: "none"}}
                />
            </figure>
        </div>
    )
}

export default FullImage;