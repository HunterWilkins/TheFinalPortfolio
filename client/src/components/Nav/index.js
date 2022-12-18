import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
function Nav(props) {
  
    let pages = ["About", "Artwork"];
    function capitalize(string) {
        try {
            return string.slice(0)[0].toUpperCase() + string.slice(1)
        }
        catch {
            return string;
        }
    }
    const [currentPage, setCurrentPage] = useState(capitalize(window.location.pathname.split("/")[1]));
    return(
        <nav>{
            pages.map(page => 
            <Link 
                className = {currentPage === page ? "active-tab" : ""} 
                to = {"/" + page.toLowerCase()}
                onClick = {() => setCurrentPage(page)}>
                {page}
            </Link>)
        }</nav>
    )
}

export default Nav;