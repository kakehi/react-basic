import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 2ee380fe325653521244a1655fa6d5da8a67e9852024fa948a41ae520fb72833'
    }
});