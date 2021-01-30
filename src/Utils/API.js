import axios from "axios";

export default {
    //third party API
    getPageSpeed: function (URL) {
        return axios.get("https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=" + URL);
    },
    //API from Database
    // Gets all WebsiteInfo
    getWebsiteInfo: function () {
        return axios.get("/api/search");
    },
    // Gets the WebsiteInfo with the given id
    getWebsiteInfo: function (id) {
        return axios.get("/api/search/" + id);
    },
    // Deletes the WebsiteInfo with the given id
    deleteWebsiteInfo: function (id) {
        return axios.delete("/api/search/" + id);
    },
    // Saves a WebsiteInfo to the database
    saveWebsiteInfo: function (bookData) {
        return axios.post("/api/search", bookData);
    }
};