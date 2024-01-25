import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import useForm from '../hooks/useForm';
import swal from 'sweetalert';
import { AuthContext } from '../auth/AuthContext';

const LoginPage = () => {
	const { login } = useContext(AuthContext);
	const [formValues, handleChange] = useForm({
		correo: localStorage.getItem('login_correo') || '',
		password: '',
		remember: localStorage.getItem('login_correo') ? true : false,
	});
	const { correo, password, remember } = formValues;
	const handleLogin = (e) => {
		e.preventDefault();
		if (correo === '' || password === '') {
			swal({
				title: '¡Ups...!',
				text: 'El correo y la contraseña son requeridos',
				icon: 'warning',
				button: 'Aceptar',
			});
			return;
		}

		remember ? localStorage.setItem('login_correo', correo) : localStorage.removeItem('login_correo');
		login(correo, password);
	};
	const checkInputs = () => {
		return correo.length > 0 && password.length > 0 ? true : false;
	};
	return (
		<>
			<label className="block text-sm text-gray-700 text-center font-semibold">Inicio de Sesión</label>
			<form className="mt-10" method="POST" onSubmit={handleLogin}>
				<div>
					<input
						className="mt-1 block w-full border-2 border-gray-200 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0 px-2"
						placeholder="Correo"
						name="correo"
						type="email"
						value={correo}
						onChange={handleChange}
					/>
				</div>
				<div className="mt-7">
					<input
						className="mt-1 block w-full border-2 border-gray-200 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0 px-2"
						placeholder="Contraseña"
						name="password"
						type="password"
						value={password}
						onChange={handleChange}
					/>
				</div>
				<div className="mt-7 flex">
					<label className="inline-flex items-center w-full cursor-pointer" htmlFor="remember_me">
						<input
							className="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
							id="remember_me"
							name="remember"
							type="checkbox"
							checked={remember}
							onChange={handleChange}
						/>
						<span className="ml-2 text-sm text-gray-600">Recuerdame</span>
					</label>
					<div className="w-full text-right">
						<Link to="auth/recovery" className="underline text-sm text-gray-600 hover:text-gray-900">
							¿Olvido su contraseña?
						</Link>
					</div>
				</div>
				<div className="mt-7">
					<button
						className="bg-blue-500 w-full py-3 rounded-xl text-white shadow-xl hover:shadow-inner focus:outline-none transition duration-500 ease-in-out transform hover:-translate-x hover:scale-105"
						type="submit"
						disabled={!checkInputs()}>
						Iniciar sesión
					</button>
				</div>
				<div className="flex mt-7 items-center text-center">
					<hr className="border-gray-300 border-1 w-full rounded-md" />
					<label className="block font-medium text-sm text-gray-700 w-full">Accede con</label>
					<hr className="border-gray-300 border-1 w-full rounded-md" />
				</div>
				<div className="flex mt-7 justify-center w-full">
					<button className="mr-5 bg-blue-500 border-none px-4 py-2 rounded-xl cursor-pointer text-white shadow-xl hover:shadow-inner transition duration-500 ease-in-out transform hover:-translate-x hover:scale-105 px-2">
						Facebook
					</button>
					<button className="bg-red-500 border-none px-4 py-2 rounded-xl cursor-pointer text-white shadow-xl hover:shadow-inner transition duration-500 ease-in-out transform hover:-translate-x hover:scale-105">
						Google
					</button>
				</div>
				<div className="mt-7">
					<div className="flex justify-center items-center">
						<label className="w-full text-sm text-gray-600">¿Eres nuevo?</label>
						<Link to="/auth/register" className="w-full text-blue-500 transition duration-500 ease-in-out transform hover:-translate-x hover:scale-105">
							Crea una cuenta
						</Link>
					</div>
				</div>
			</form>
		</>
	);
};

export default LoginPage;
