import axios from 'axios';

const url = "http://localhost:8000/api";
let token = "HnzO59e3F2tRXjcs3t4BqU74rRMuiCJGmyYqUv45";

export const link = axios.create({
    baseURL : url,
    headers : {
        'api_token' : token,
    }
});