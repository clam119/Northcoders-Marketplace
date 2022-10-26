import axios from 'axios'


const marketplaceApi = axios.create({
    baseURL: "http://localhost:9090/api"
})

export const fetchAllItems = () => {
    return marketplaceApi.get('/items')
    .then((response) => {
        return response.data;
    })
}