import React, {useState, useEffect} from "react";
import "./style.css";
import API from "../../utils/api";
import {useGlobalContext} from "../../utils/GlobalContext";

function FullImage({src, genre, fullScreenOff, fullscreen}) {
    // const {state, dispatch} = useGlobalContext();
    const [loaded, setLoaded] = useState(false);
    const [showDesc, setShowDesc] = useState(true);
    const [description, setDescription] = useState("");
    useEffect(() => {
        getDescription(changeSrc(src));
    }, [])

    function getDescription(image) {
        console.log("LOOKING FOR THE DESCRIPTION");
        API.getDescription(image.replace(/=|.jpg|.png/g, "")).then(({data}) => {
            setDescription(data);
            console.log(data);
        }).catch(() => setDescription(""));
    }

    function changeSrc(src) {
        return src.replace(/-Thumbnail/g, "");
    }

    
    return(
        <div  id = "full-image-box" style = {fullscreen ? {display: "flex"} : {display: "none"}}>
            <figure id = "full-image-figure" onClick = {() => fullScreenOff()} style = {!loaded ? {backgroundImage: "url('/images/icons/loading.gif')"} : {}}>
                <img onLoad = {() => {
                    console.log("Image Loaded");
                    // getDescription(changeSrc(src));
                    setLoaded(true);
                }} 
                    id = "full-image" 
                    src = {"/images/Artwork/" + genre + "/full-size/" + changeSrc(src)} 
                    alt = {src} 
                    style = {loaded ? {display: "block"} : {display: "none"}}
                />
            </figure>
            <summary style = {showDesc && description.length > 0 ? {display: "block"} : {display: "none"}} id = "description" onClick = {() => setShowDesc(false)}>
                <p>{description}</p>
            </summary>
        </div>
    )
}

export default FullImage;