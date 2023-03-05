const baseUrl = 'http://localhost:8080';

function EliminarProducto(pid) {
	fetch(baseUrl + '/productos/' + pid, { method: 'DELETE'})
}
function Actualizar(pid) {

	const data ={
		name: document.getElementById("name").value,
		description: document.getElementById("description").value,
		code: document.getElementById("code").value,
		price: document.getElementById("price").value,
		photo: document.getElementById("photo").value,
		stock: document.getElementById("stock").value,
	}

	fetch(baseUrl + "/productos/" + pid, {
		method: "PUT",
		body: JSON.stringify(data),
		headers: {
		  "Content-type": 'application/json; charset=UTF-8'
		}
	})
}
