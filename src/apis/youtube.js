import axios from 'axios'
const KEY='AIzaSyAoX7Tz9eDtfUf0qtd5O99W6QdnxLjXec4'
export default axios.create({
    baseURL:'https://www.googleapis.com/youtube/v3',
    params:{
        part:'snippet',
        type:'video',
        maxResults:5,
        key:KEY
    }
})


