import React, {Component} from "react";
import "./style.css";
import axios from "axios";

import About from "../About";
import Artwork from "../../pages/Artwork";
import Blog from "../../pages/Blog";
import Code from "../../pages/Code";
import FullImage from "../../components/FullImage";

class Home extends Component {
    state = {
        page: "about",
        fullImageSrc: "",
        fullImageAlt: "",
        fullImageDisplay: false,
        fullImageLoaded: false,
        fullImages: []
    }

    componentDidMount = () => {
        axios.get("/api/art").then(response => {
            this.setState({
                art: response.data
            });
        }).catch(function(err) {
            console.log(err);
        });
    }

    capitalize = (string) => {
        return string[0].toUpperCase() + string.slice(1);
    }

    changePage = (page) => {
        console.log(page);
        this.setState({page: page})
    }

    switchToImageLoaded = (imageLoaded) => {
        this.setState({
            fullImageLoaded: imageLoaded
        });
    }

    turnOffFullScreen = () => {
        this.setState({
            fullImageLoaded: false,
            fullImageDisplay: false
        });
    }

    getFullSizedImage = (image, genre) => {
        let imageSrc = image.replace(/-Thumbnail/g, "");
        let imageAlt = imageSrc.replace(/.jpg | .png |=/g, "");
        
        this.setState({
            fullImageSrc: "/images/Artwork/" + genre + "/full-size/" + imageSrc,
            fullImageAlt: imageAlt,
            fullImageDisplay: true,
            fullImages: [this.state.fullImages, ...image]
        });
    }

    render() {
        

        // let renderPage = () => {
        //     return pages.filter(page => this.state.page === page.name)[0].component;
        // }

      

        return(
            <div id = "content">
                <header>
                    <h1>Hunter Wilkins</h1>
                </header>
              
                <main>
                    
                </main>
              
                
            </div>
        )
    }
}

export default Home;