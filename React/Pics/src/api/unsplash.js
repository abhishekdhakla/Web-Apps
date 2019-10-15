import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com/',
    headers: {
        Authorization: 'Client-ID 02b845d03d3364bd50bfd65d5019fc70c2ef59cb56545cc66c24b972b31dc757'
    }
});