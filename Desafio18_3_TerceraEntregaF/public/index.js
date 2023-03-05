const socket = io();
const baseUrl = 'http://localhost:8080';

socket.on('messages', (data) => {
	const html = data
		.map((msj) => {
			return `<div>
		  <strong>${msj.author.name}</strong>
		  <strong>${msj.fyh}</strong>
		  <em>${msj.text}</em>
		  </div>`;
		})
		.join(' ');

	document.getElementById('messages').innerHTML = html;
});

function addMessage() {
	const message = {
		author: {
			name: document.getElementById('name').value,
		},
		text: document.getElementById('text').value,
	};
	socket.emit('new-message', message);
	// return false
}

function EliminarProducto(pid) {
	fetch(baseUrl + '/productos/' + pid, { method: 'DELETE' });
}
function Actualizar(pid) {
	const data = {
		name: document.getElementById('name').value,
		description: document.getElementById('description').value,
		code: document.getElementById('code').value,
		price: document.getElementById('price').value,
		photo: document.getElementById('photo').value,
		stock: document.getElementById('stock').value,
	};

	fetch(baseUrl + '/productos/' + pid, {
		method: 'PUT',
		body: JSON.stringify(data),
		headers: {
			'Content-type': 'application/json; charset=UTF-8',
		},
	});
}
