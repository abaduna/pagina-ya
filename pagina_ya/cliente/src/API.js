import axios from "axios";

export const API = axios.create({ baseURL: "http://localhost:3001/api/" });

API.interceptors.request.use((config)=>{
    const jwt = localStorage.getItem("auth") ?? ""
    config.headers["Autorization"] = jwt
    return config
})
