import axios from "axios"

const BASE_URL = !process.env.NODE_ENV || process.env.NODE_ENV === "development" ? "http://localhost:9000/" : "https://albumranker.herokuapp.com/"
console.log(process.env.NODE_ENV)
console.log(BASE_URL)

export const axiosInstance = axios.create({
    baseURL: BASE_URL,
    headers: {
        Accept: "application/vnd.GitHub.v3+json"
    }
})
