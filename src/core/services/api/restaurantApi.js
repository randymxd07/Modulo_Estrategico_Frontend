import axios from "axios"

const restaurantApi = axios.create({
    baseURL: 'http://localhost:8000/v1/',
    headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
    }
})

export default restaurantApi;
