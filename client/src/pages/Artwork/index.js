import React, {useState, useEffect} from "react";
import "./style.css";
import {useGlobalContext} from "../../utils/GlobalContext";
import API from "../../utils/api";

import FullImage from "../../components/FullImage";

function Artwork() {
    // const [state, dispatch] = useGlobalContext();
    const [genres, setGenres] = useState(["pending"]);
    const [fullscreen, setFullscreen] = useState(false);
    const [imgLoaded, setImgLoaded] = useState(false);
    const [fullImg, setFullImg] = useState({
        src: "",
        genre: ""
    });

    const [imgError, setImgError] = useState(false);

    useEffect(()=> {
        API.getThumbnails().then(res => {
            setGenres(res.data);            
        }).catch(err => console.log(err));    
    }, []);

    function fixTitle(title) {
        return title.replace(/=|.jpg|.png|-Thumbnail/g," ");
    }

    function fullScreenOff() {
        setFullscreen(false);
    }

    return(
        <div id = "artwork-page">  
            {
             fullscreen ? 
                <FullImage fullScreenOff = {fullScreenOff}src = {fullImg.src} genre = {fullImg.genre}/>
                :
                ""
            }
                     
            <section id = "gallery">
               
                {                
                    genres[0].thumbnails ? 
                    genres.map(item => {
                        return(
                        <section>
                            <h1 className = "genre-title">{item.genre}</h1>
                            <section className = "thumbnails">
                                {
                                    item.thumbnails.map(thumbnail => {
                                        return( 
                                        <figure onClick = {() => {
                                            setFullImg({
                                                src: thumbnail,
                                                genre: item.genre
                                            });
                                            setFullscreen(true);
                                            }} className = "thumbnail-box" key = {Math.random() * item.thumbnails.length} style = {imgLoaded ? {} : {backgroundImage: "url('/images/icons/loading.gif')"}}>
                                                <p className = "thumbnail-title" key = {Math.random() * item.thumbnails.length + thumbnail}>{fixTitle(thumbnail)}</p>
                                                <img onLoad = {() => {setImgLoaded(true)}} /*onError = {() => setImgError(true)}*/ className = "thumbnail" src = {imgError ? "/images/backup-img.jpg" : "/images/Artwork/" + item.genre + "/thumbnails/" + thumbnail} alt = {fixTitle(thumbnail)}></img>
                                        </figure>
                                        )
                                    })
                                }
                            </section>
                        </section>
                        )
                    })
                    :
                    <p>Please wait while the images are being called...</p>
                }

                
            </section>
        </div>
    )
}

export default Artwork;