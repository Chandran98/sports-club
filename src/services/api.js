import axios from 'axios';

//Initialize our API to request the info
const api = axios.create({
    // Production
    //baseURL: 'https://api-fitclub.herokuapp.com'
    // Development
    baseURL : "http://back.kpl19.com/"
    // baseURL:"http://back.kpl19.com/"

})

export default api;