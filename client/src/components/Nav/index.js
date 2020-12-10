import React from "react";
import {Link} from "react-router-dom";
function Nav(props) {
  
    let pages = ["About", "Artwork", "Code", "Blog"];
    return(
        <nav>{
            pages.map(page => 
            <Link to = {"/" + page.toLowerCase()}>
                {page}
            </Link>)
        }</nav>
    )
}

export default Nav;