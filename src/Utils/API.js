import axios from "axios";

export default{ 
    getPageSpeed:function(URL){    
        return axios.get("https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=" + URL);
    }
};