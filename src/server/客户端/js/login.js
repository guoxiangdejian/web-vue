import axios from 'axios';

//增加默认的请求路径
axios.defaults.baseURL = 'http://localhost:3000'

axios.interceptors.response.use((res) =>{
	return res.data
})

export let addBook = (data) =>{
	return axios.post('/book',data)
}