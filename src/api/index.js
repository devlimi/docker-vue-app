import axios from 'axios';

const config ={
    baseUrl: 'https://api.hnpwa.com/v0/'
}

function fetchNewList(){
    return axios.get(`${config.baseUrl}news/1.json`);
}

export{
    fetchNewList
}
