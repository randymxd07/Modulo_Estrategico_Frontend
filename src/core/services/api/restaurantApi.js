import axios from "axios"

const restaurantApi = axios.create({
    baseURL: 'http://localhost:8000/api/',
    headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
    }
})

export default restaurantApi;
