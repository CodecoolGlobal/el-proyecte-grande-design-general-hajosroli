import axios from "axios"
import { useAuthContext } from "./useAuthContext";

export const useAxios = () => {
  const {user} = useAuthContext()

  const http = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    headers: {
      'Authorization' : `Bearer ${user?.token}`,
      'Content-Type': 'application/json'
    },
    withCredentials: true
  });

  const axiosPost = async (endpoint, data) => {
    const response = await http.post(endpoint, data, {
      headers: {
        'X-XSRF-TOKEN': "XSRF-TOKEN",
      },
      withCredentials: true
    })
    return response;
  }

  const axiosGet = async (endpoint) => {
    const response = await http.get(endpoint, {
      headers: {
        'X-XSRF-TOKEN': "XSRF-TOKEN",
      },
      withCredentials: true
    })
    return response;
  }

  return {axiosPost, axiosGet, http}
}
