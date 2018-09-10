import axios from 'axios';

//增加默认的请求路径
axios.defaults.baseURL = 'http://localhost:3030'

axios.interceptors.response.use((res) => {
	return res.data
})

export let register = () => {
	return axios.post('/goodsdata', {
		"code": "123456789"
	}).then((response) => {
		return response.result.infolist[0]
	}).catch((error) => {
		console.log(error);
	});
}

export let getIcon = () => {
	return axios.post('/goodsdata', {
		"code": "123456789"
	}).then((response) => {
		return response.result.infolist[1]
	}).catch((error) => {
		console.log(error);
	});
}

export let getShopList = () => {
	return axios.post('/goodsdata', {
		"code": "123456789"
	}).then((response) => {
		return response.result.infolist[2]
	}).catch((error) => {
		console.log(error);
	});
}

export let findOneList = (id) => {
	return axios.post(`/goodsdata?id=${id}`, {
		"code": "123456789"
	}).then((response) => {
		return response.result.infolist[2]
	}).catch((error) => {
		console.log(error);
	});
}

export let login = (data) => {
	return axios.post('/reg', data).then((response) => {
		return response
	}).catch((error) => {
		console.log(error);
	});
}

export let creatAddress = (data) => {
	return axios.post('/address', data).then((response) => {
		return response
	}).catch((error) => {
		console.log(error);
	});
}

export let getAddress = (data) => {
	return axios.post('/newaddress', data).then((response) => {
		return response
	}).catch((error) => {
		console.log(error);
	});
}
export let getOrders = (data) => {
	return axios.post('/order', data).then((response) => {
		return response
	}).catch((error) => {
		console.log(error);
	});
}
export let getOrderList = (data) => {
	return axios.post('/orderlist', data).then((response) => {
		return response
	}).catch((error) => {
		console.log(error);
	});
}
export let deleteOneList = (data) => {
	return axios.post('/deleteolder', data).then((response) => {
		return response
	}).catch((error) => {
		console.log(error);
	});
}