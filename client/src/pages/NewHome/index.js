import React, {useState, useEffect, useContext} from "react";
import "./style.css";
import {useGlobalContext} from "../../utils/GlobalContext";
import * as API from "../../utils/api";
import Footer from "../../components/Footer";

function NewHome(props) {
    
    return(

        <main>
            {props.children}
        </main>
    )
}

export default NewHome