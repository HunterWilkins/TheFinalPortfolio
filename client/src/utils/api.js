import axios from "axios";

export default {
    getThumbnails: function() {
        return axios.get("/api/art")
    },

    getDescription: function(image) {
        return axios.get("/api/description/" + image);
    }
} 