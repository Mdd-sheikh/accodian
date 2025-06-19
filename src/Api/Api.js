import axios from "axios"


const API_URL ="https://jsonplaceholder.typicode.com/posts"

export const Getpost = () => axios.get(API_URL)
const updatepost = (id) => axios.put(`${API_URL}/${id}`)
 export const deletepost = (id) =>axios.delete(`${API_URL}/${id}`)