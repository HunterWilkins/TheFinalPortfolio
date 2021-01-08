import React, {useState, useEffect} from "react";
import API from "../../utils/api";

function Thumbnail({thumbnail, genre, item, setFullImg, setFullscreen}) {

    const [imgLoaded, setImgLoaded] = useState(false);

    function fixTitle(title) {
        return title.replace(/=|.jpg|.png|-Thumbnail/g," ");
    }

    return(
        <figure onClick = {() => {
            setFullImg({
                src: thumbnail,
                genre: item.genre
            });
            setFullscreen(true);
            }} className = "thumbnail-box" key = {Math.random() * item.thumbnails.length} style = {imgLoaded ? {} : {backgroundImage: "url('/images/icons/loading.gif')", backgroundSize: "100%"}}>
                <p className = "thumbnail-title" key = {Math.random() * item.thumbnails.length + thumbnail}>{fixTitle(thumbnail)}</p>
                <img onLoad = {() => {setImgLoaded(true)}} onError = {() => setImgLoaded(true)} className = "thumbnail" src = {"/images/Artwork/" + item.genre + "/thumbnails/" + thumbnail} alt = {fixTitle(thumbnail)}></img>
        </figure>
    )
}

export default Thumbnail;