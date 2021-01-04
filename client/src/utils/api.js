import axios from "axios";

let counter = 0;

export default {
    getThumbnails: function() {
        return axios.get("/api/art")
    },

    getDescription: function(image) {
        console.log(image);
        return axios.get("/api/description/" + image);
    }
} 