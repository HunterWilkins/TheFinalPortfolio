import React, {Component} from "react";
import "./style.css";
import axios from "axios";

import About from "../../components/About";
import Artwork from "../../components/Artwork";
import Blog from "../../components/Blog";
import Code from "../../components/Code";
class Home extends Component {
    state = {
        page: "about"
    }

    componentDidMount = () => {
        this.capitalize("hello");
        axios.get("/api/art").then(response => {
            this.setState({
                art: response.data
            });
        }).catch(function(err) {
            console.log(err);
        })
    }

 

    capitalize = (string) => {
        return string[0].toUpperCase() + string.slice(1);
    }

    changePage = (page) => {
        console.log(page);
        this.setState({page: page})
    }

    render() {
        let pages = [
            {
                name: "about",
                component: <About />
            },
            {
                name: "artwork",
                component: <Artwork genres = {this.state.art}/>
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
                    <p>wilkins.hunter@gmail.com</p>
                </footer>
            </div>
        )
    }
}

export default Home;