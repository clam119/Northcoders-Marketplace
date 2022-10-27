import axios from 'axios'

const marketplaceApi = axios.create({
    baseURL: "https://clam119-nc-marketplace-api.herokuapp.com/api/"
})

export const fetchAllItems = () => {
    return marketplaceApi.get('/items')
    .then((response) => {
        return response.data.items;
    })
}

export const fetchItemById = (item_id) => {
    return marketplaceApi.get(`/items/${item_id}`)
    .then((response) => {
        return response.data.item
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
        return response.data.users;
    })
}