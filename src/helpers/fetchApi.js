import swal from 'sweetalert';
const host_API = process.env.REACT_APP_HOST_API;

export const fetchSinToken = async (endpoint, data, method = 'GET') => {
	try {
		if (method === 'GET') {
			const respuesta = await fetch(`${host_API}${endpoint}`);

			const json = await respuesta.json();
			if (json.status !== 200) {
				const error = {
					status: json.status,
					statusText: json.statusText,
				};
				throw error;
			}
			return json;
		} else {
			const respuesta = await fetch(`${host_API}${endpoint}`, {
				method,
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(data),
			});

			const json = await respuesta.json();
			if (json.status !== 200) {
				const error = {
					status: json.status,
					statusText: json.statusText,
				};
				throw error;
			}
			return json;
		}
	} catch (error) {
		console.log(error)
		swal({
			title: '¡Error de Petición!',
			text: error.statusText,
			icon: 'error',
			button: 'Aceptar',
		});
	}
};

export const fetchConToken = async (endpoint, data, method = 'GET') => {
	try {
		const token = localStorage.getItem('login_token');

		if (method === 'GET') {
			const respuesta = await fetch(`${host_API}${endpoint}`, {
				headers: {
					'x-token': token,
				},
			});

			const json = await respuesta.json();
			if (json.status !== 200) {
				const error = {
					status: json.status,
					statusText: json.statusText,
				};
				throw error;
			}
			return json;
		} else {
			const respuesta = await fetch(`${host_API}${endpoint}`, {
				method,
				headers: {
					'Content-Type': 'application/json',
					'x-token': token,
				},
				body: JSON.stringify(data),
			});

			const json = await respuesta.json();
			if (json.status !== 200) {
				const error = {
					status: json.status,
					statusText: json.statusText,
				};
				throw error;
			}
			return json;
		}
	} catch (error) {
		swal({
			title: '¡Error de Token!',
			text: error.statusText,
			icon: 'error',
			button: 'Aceptar',
		});
	}
};
