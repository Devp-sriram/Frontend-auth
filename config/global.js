import dotenv from 'dotenv'
dotenv.config();
const API_URL = process.env.VITE_BACKEND_URL
// const API_URL = "http://localhost:4000"

export default API_URL
