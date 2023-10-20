import axios from 'axios'

const apiBaseUri = import.meta.env.VITE_API_BASE_URI
const ACCESS_TOKEN_KEY = 'accessToken'

export const apiCall = axios.create({
  baseURL: apiBaseUri,
  headers: {
    'Content-Type': 'application/json'
  }
})

apiCall.interceptors.request.use(config => {
  const accessToken = window.localStorage.getItem(ACCESS_TOKEN_KEY)
  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`
  }
  return config
})
