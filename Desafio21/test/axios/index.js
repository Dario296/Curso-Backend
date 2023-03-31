import axios from 'axios';

const URL = 'http://localhost:8080/product/';

axios(URL)
	.then((res) => {
		const data = res.data;
		console.log("---------1---------");
		console.log(data);
	})
	.catch((err) => {
		console.log(err);
	});

axios
	.post(`${URL}/producto1`)
		.then((res) => {
			const data = res.data;
			console.log(data);
		})
		.catch((err) => {
			console.log(err);
		});

axios
	.post(URL, {
		name: 'Product-Random',
		description: 'Cascos',
		code: 123,
		price: 666,
		photo: 'https://www.rae.es/sites/default/files/styles/wysiwyg_100_/public/2021-07/ramdomtwitter_Mesa%20de%20trabajo%201.png?itok=JfO9YVoD',
		stock: 5,
	})
	.then((res) => {
		const data = res.data;
		console.log(data);
	})
	.catch((err) => {
		console.log(err);
	});