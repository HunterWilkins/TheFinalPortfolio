import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import About from "./pages/About";
import Artwork from "./pages/Artwork";
import Blog from "./pages/Blog";
import Code from "./pages/Code";
import Nav from "./components/Nav";
import Header from "./components/Header";
import NewHome from "./pages/NewHome";
import Footer from "./components/Footer";
import {GlobalContextProvider} from "./utils/GlobalContext";
import "./App.css";

function App() {
  return (
    <Router>
        
        <NewHome>
        <Header />
        <GlobalContextProvider>
          <Switch>
            <Route exact path = "/about" component ={About} />
            <Route exact path = "/artwork" component ={Artwork} />
            <Route exact path = "/blog" component ={Blog} />
            <Route exact path = "/code" component ={Code} />
            <Route exact path = "/" component = {About} />
          </Switch>
        </GlobalContextProvider>
        <Footer />
        </NewHome>
        
    </Router>
  );
}

export default App;
