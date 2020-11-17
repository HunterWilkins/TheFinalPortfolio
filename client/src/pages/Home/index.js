import React, {Component} from "react";
import "./style.css";
import axios from "axios";

import About from "../../components/About";
import Artwork from "../../components/Artwork";
import Blog from "../../components/Blog";
import Code from "../../components/Code";
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
        let pages = [
            {
                name: "about",
                component: <About />
            },
            {
                name: "artwork",
                component: <Artwork 
                fullImageDisplay = {this.state.fullImageDisplay} 
                src = {this.state.fullImageSrc} 
                alt = {this.state.fullImageAlt} 
                getFullSizedImage = {this.getFullSizedImage}
                switchToImageLoaded = {this.switchToImageLoaded}
                genres = {this.state.art}
                turnOffFullScreen = {this.turnOffFullScreen}
                fullImageLoaded = {this.state.fullImageLoaded}
                fullImages = {this.state.fullImages}
                />
            },
            {
                name: "blog",
                component: <Blog />
            },
            {
                name: "code",
                component: <Code />
            }
        ];

        let renderPage = () => {
            return pages.filter(page => this.state.page === page.name)[0].component;
        }

        let footerIcons = [
            {
                icon: "github-icon.png",
                url: "https://github.com/HunterWilkins"
            },
            {
                email: "wilkins.hunter@gmail.com"
            },
            {
                icon: "linkedin-icon.png",
                url: "https://www.linkedin.com/in/hunter-wilkins-591047117/"
            }
        ]

        return(
            <div id = "content">
                <header>
                    <h1>Hunter Wilkins</h1>
                </header>
                <nav>{pages.map(page => <p className = {this.state.page === page.name ? "active-tab" : ""} onClick = {() => this.changePage(page.name)}>{this.capitalize(page.name)}</p>)}</nav>
                <main>
                    {
                       renderPage() 
                    }
                </main>
                <footer>
                    {
                        footerIcons.map(item => {
                            if (item.email) {
                                return (
                                    <p>{item.email}</p>
                                )
                            }

                            else {
                            
                                return (
                                    <a className = "icon" target = "_blank" href = {item.url}><img src = {"/images/icons/" + item.icon} alt = {item.icon} /></a>
                                )
                            }
                        })
                    }
                </footer>
            </div>
        )
    }
}

export default Home;