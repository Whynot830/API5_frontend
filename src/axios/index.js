import axios from "axios"

const instance = axios.create({
    //baseURL: "http://localhost:3001",
    baseURL: "http://restapi5.onrender.com"

})

export default instance