import axios from 'axios'
import {BASE_API_URL} from '../constants/common'

export const HttpClient = axios.create({
    baseURL: BASE_API_URL, 
    responseType: 'json', 
    timeout: 1000, 
    data: 'object'
})