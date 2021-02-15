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
    getSemrushtp: function(URL){    
        return axios.get("https://cors-everywhere-jrl.herokuapp.com/https://api.semrush.com/?type=domain_organic_unique&key="+ process.env.REACT_APP_PASSKEY +"&display_filter=%2B%7CPc%7CGt%7C100&display_limit=10&export_columns=Ur,Pc,Tg,Tr&domain="+ URL +"&display_sort=tr_desc&database=us");
    },
    // Gets all url
    getUrls: function () {
        return axios.get("api/auth");
    },
    // Gets the url with the given id
    getUrl: function (id) {
        return axios.get("/api/auth/" + id);
    },
    // Deletes the url with the given id
    deleteUrl: function (id) {
        return axios.delete("/api/auth/" + id);
    },
    // Saves a url to the database
    saveUrl: function (urlData) {
        console.log(urlData)
        return axios.post("/api/auth", urlData);
        
    }
};
export default api
