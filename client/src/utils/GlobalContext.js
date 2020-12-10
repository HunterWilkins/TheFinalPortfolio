import React, { useContext, useReducer } from "react";
import API from "../utils/api";

const GlobalContext = React.createContext({
    genres: ["test"],
    fullscreen: false
});

const {Provider} = GlobalContext;

const reducer = (state, action) => {
    switch(action.type) {
        case "getThumbnails":
            return {
                ...state,
                genres: action.genres
            }
           
        case "fullscreen":
            return {
                ...state,
                fullscreen: action.fullscreen 
            };
        case "fsLoaded":
            return{
                ...state,
                fsLoaded: action.fsLoaded
            }
        default: return state;
    }  
}

const GlobalContextProvider = ({value = [], ...props}) => {
    const [state, dispatch] = useReducer(reducer, {
        genres: ["test"],
        fullscreen: false
    });
    return <Provider value = {[state, dispatch]} {...props} />
}

const useGlobalContext = () => {
    return useContext(GlobalContext);
}

export {GlobalContextProvider, useGlobalContext};
