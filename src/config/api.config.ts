import axios from 'axios'

export const axiosClassic = axios.create({
	baseURL: 'https://api.bilolbek-travel.uz/api/v1'
})
