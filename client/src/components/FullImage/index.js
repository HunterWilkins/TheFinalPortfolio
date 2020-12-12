import React, {useState, useEffect} from "react";
import "./style.css";
import API from "../../utils/api";
import {useGlobalContext} from "../../utils/GlobalContext";

function FullImage({src, genre, fullScreenOff}) {
    // const {state, dispatch} = useGlobalContext();
    const [loaded, setLoaded] = useState(false);
    console.log(src, genre);
    const [description, setDescription] = useState("");
    useEffect(() => {
        getDescription(changeSrc(src));
    }, [])

    function getDescription(image) {
        API.getDescription(image).then(({data}) => {
            setDescription(data);
            console.log(description);
        }).catch(() => setDescription(""));
    }

    function changeSrc(src) {
        return src.replace(/-Thumbnail/g, "");
    }
    return(
        <div  id = "full-image-box">
            <figure id = "full-image-figure" onClick = {() => fullScreenOff()} style = {!loaded ? {backgroundImage: "url('/images/icons/loading.gif')"} : {}}>
                <img onLoad = {() => {
                    console.log("Image Loaded");
                    getDescription(changeSrc(src));
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