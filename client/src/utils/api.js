import axios from "axios";

export default {
    getThumbnails: function() {
        return axios.get("/api/art")
    }
} 