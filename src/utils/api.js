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

export const fetchItemById = (item_id) => {
    return marketplaceApi.get(`/items/${item_id}`)
    .then((response) => {
        return response.data
    })
}

export const deleteItemById = (item_id) => {
    return marketplaceApi.delete(`/items/${item_id}`)
    .then((response) => {
        return response.data;
    })
}

export const fetchAllUsers = () => {
    return marketplaceApi.get('/users')
    .then((response) => {
        console.log(response.data.users)
        return response.data.users;
    })
}