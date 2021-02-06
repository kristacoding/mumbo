import axios from "axios";
require('dotenv').config();

const api =  {
    //third party API
    getPageSpeed: function (URL) {
        return axios.get("https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=" + URL);
    },
    getSemrush: function(URL){    
        return axios.get("https://cors-anywhere.herokuapp.com/https://api.semrush.com/?type=domain_rank&key="+ process.env.REACT_APP_PASSKEY +"&export_columns=Dn,Rk,Or,X0,X1,X2,Ot,Oc,Ad,At,Ac&domain="+ URL +"&database=us");
        }
};
export default api
