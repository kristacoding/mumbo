import axios from "axios";
require('dotenv').config();

const api = {
    //third party API
    getPageSpeed: function (URL) {
        return axios.get("https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=" + URL);
    },
    getSemrush: function (URL) {
        return axios.get("https://cors-everywhere-jrl.herokuapp.com/https://api.semrush.com/?type=domain_rank&key=" + process.env.REACT_APP_PASSKEY + "&export_columns=Dn,Rk,Or,X0,X1,X2,X3,X4,Ot,Oc,Ad,At,Ac&domain=" + URL + "&database=us");
    },
    // Gets all books
    getUrls: function () {
        return axios.get("/profile");
    },
    // Gets the book with the given id
    getUrl: function (id) {
        return axios.get("/profile/" + id);
    },
    // Deletes the book with the given id
    deleteUrl: function (id) {
        return axios.delete("/profile/" + id);
    },
    // Saves a book to the database
    saveUrl: function (urlData) {
        console.log(urlData)
        return axios.post("/profile", urlData);
        
    }
};
export default api
