import React, {useState, useEffect} from "react";
import "./style.css";
import {useGlobalContext} from "../../utils/GlobalContext";

function FullImage({src, genre, fullScreenOff}) {
    // const {state, dispatch} = useGlobalContext();
    const [loaded, setLoaded] = useState(false);
    console.log(src, genre);

    function changeSrc(src) {
        return src.replace(/-Thumbnail/g, "");
    }
    return(
        <div  id = "full-image-box">
            <figure id = "full-image-figure" onClick = {() => fullScreenOff()} style = {!loaded ? {backgroundImage: "url('/images/icons/loading.gif')"} : {}}>
                <img onLoad = {() => {
                    console.log("Image Loaded");
                    setLoaded(true);
                }} 
                    id = "full-image" 
                    src = {"/images/Artwork/" + genre + "/full-size/" + changeSrc(src)} 
                    alt = {src} 
                    style = {loaded ? {display: "block"} : {display: "none"}}
                />
            </figure>
        </div>
    )
}

export default FullImage;