import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import useForm from '../hooks/useForm';
import swal from 'sweetalert';
import { AuthContext } from '../auth/AuthContext';

const RegisterPage = () => {
	const { register } = useContext(AuthContext);
	const [formValues, handleChange] = useForm({
		nombre: '',
		correo: '',
		password: '',
		password2: '',
	});

	const { nombre, correo, password, password2 } = formValues;
	const handleRegister = (e) => {
		e.preventDefault();
		if (nombre === '' || correo === '' || password === '') {
			swal({
				title: '¡Ups...!',
				text: 'Todos los campos son requeridos',
				icon: 'warning',
				button: 'Aceptar',
			});
			return;
		} else if (password !== password2) {
			swal({
				title: '¡Ups...!',
				text: 'Las contraseñas no son iguales',
				icon: 'warning',
				button: 'Aceptar',
			});
			return;
		} else {
			register(nombre, correo, password);
		}
	};
	return (
		<>
			<label className="block text-sm text-gray-700 text-center font-semibold">Registro</label>
			<form className="mt-10" method="POST" onSubmit={handleRegister}>
				<div>
					<input
						className="mt-1 block w-full border-2 border-gray-200 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0 px-2"
						placeholder="Nombre"
						type="text"
						name="nombre"
						value={nombre}
						onChange={handleChange}
					/>
				</div>
				<div className="mt-7">
					<input
						className="mt-1 block w-full border-2 border-gray-200 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0 px-2"
						placeholder="Correo"
						type="email"
						name="correo"
						value={correo}
						onChange={handleChange}
					/>
				</div>
				<div className="mt-7">
					<input
						className="mt-1 block w-full border-2 border-gray-200 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0 px-2"
						placeholder="Contraseña"
						type="password"
						name="password"
						value={password}
						onChange={handleChange}
					/>
				</div>
				<div className="mt-7">
					<input
						className="mt-1 block w-full border-2 border-gray-200 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0 px-2"
						placeholder="Confirmar contraseña"
						type="password"
						name="password2"
						value={password2}
						onChange={handleChange}
					/>
				</div>
				<div className="mt-7">
					<button
						className="bg-blue-500 w-full py-3 rounded-xl text-white shadow-xl hover:shadow-inner focus:outline-none transition duration-500 ease-in-out transform hover:-translate-x hover:scale-105"
						type="submit">
						Registrarse
					</button>
				</div>
				<div className="flex mt-7 items-center text-center">
					<hr className="border-gray-300 border-1 w-full rounded-md" />
					<label className="block font-medium text-sm text-gray-700 w-full">Registrate con</label>
					<hr className="border-gray-300 border-1 w-full rounded-md" />
				</div>
				<div className="flex mt-7 justify-center w-full">
					<button className="mr-5 bg-blue-500 border-none px-4 py-2 rounded-xl cursor-pointer text-white shadow-xl hover:shadow-inner transition duration-500 ease-in-out transform hover:-translate-x hover:scale-105">
						Facebook
					</button>
					<button className="bg-red-500 border-none px-4 py-2 rounded-xl cursor-pointer text-white shadow-xl hover:shadow-inner transition duration-500 ease-in-out transform hover:-translate-x hover:scale-105">
						Google
					</button>
				</div>
				<div className="mt-7">
					<div className="flex justify-center items-center">
						<label className="w-full text-sm text-gray-600">¿Ya tienes una cuenta?</label>
						<Link to="/auth/login" className="w-full text-blue-500 transition duration-500 ease-in-out transform hover:-translate-x hover:scale-105">
							Iniciar sesión
						</Link>
					</div>
				</div>
			</form>
		</>
	);
};

export default RegisterPage;
