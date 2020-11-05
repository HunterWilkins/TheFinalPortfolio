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

    renderPage = () => {
        return this.pages.filter(page => this.state.page === page.name)[0].component;
    }

    render() {
        return(
            <div id = "content">
                <nav>{this.pages.map(page => <p onClick = {() => this.setState({page: page.name})}>{page.name}</p>)}</nav>
                <main>
                    {
                       this.renderPage() 
                    }
                </main>
            </div>
        )
    }
}

export default Home;