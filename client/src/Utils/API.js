import axios from "axios";
require('dotenv').config();

const api =  {
    //third party API
    getPageSpeed: function (URL) {
        return axios.get("https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=" + URL);
    },
    getSemrush: function(URL){    
        return axios.get("https://cors-everywhere-jrl.herokuapp.com/https://api.semrush.com/?type=domain_rank&key="+ process.env.REACT_APP_PASSKEY +"&export_columns=Dn,Rk,Or,X0,X1,X2,X3,X4,Ot,Oc,Ad,At,Ac&domain="+ URL +"&database=us");
        },
    getSemrushtp: function(URL){    
            return axios.get("https://cors-everywhere-jrl.herokuapp.com/https://api.semrush.com/?type=domain_organic_unique&key="+ process.env.REACT_APP_PASSKEY +"&display_filter=%2B%7CPc%7CGt%7C100&display_limit=10&export_columns=Ur,Pc,Tg,Tr&domain="+ URL +"&display_sort=tr_desc&database=us");
        }
};
export default api
