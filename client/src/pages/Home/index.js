import React, {Component} from "react";
import "./style.css";

import About from "../../components/About";
import Artwork from "../../components/Artwork";
import Blog from "../../components/Blog";
import Code from "../../components/Code";
class Home extends Component {
    state = {
        page: "about"
    }

    pages = [
        {
            name: "about",
            component: <About />
        },
        {
            name: "artwork",
            component: <Artwork />
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

    componentDidMount = () => {
        this.capitalize("hello");
    }

    renderPage = () => {
        return this.pages.filter(page => this.state.page === page.name)[0].component;
    }

    capitalize = (string) => {
        return string[0].toUpperCase() + string.slice(1);
    }

    changePage = (page) => {
        console.log(page);
        this.setState({page: page})
    }

    render() {
        return(
            <div id = "content">
                <header>
                    <h1>Hunter Wilkins</h1>
                </header>
                <nav>{this.pages.map(page => <p className = {this.state.page === page.name ? "active-tab" : ""} onClick = {() => this.changePage(page.name)}>{this.capitalize(page.name)}</p>)}</nav>
                <main>
                    {
                       this.renderPage() 
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