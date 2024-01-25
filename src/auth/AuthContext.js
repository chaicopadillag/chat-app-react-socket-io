import { createContext, useCallback, useState } from 'react';
import { fetchConToken, fetchSinToken } from '../helpers/fetchApi';

export const AuthContext = createContext();

const initialAuth = {
	checking: true,
	logged: false,
};

export const AuthProvider = ({ children }) => {
	const [auth, setAuth] = useState(initialAuth);

	const login = async (correo, password) => {
		const loginRes = await fetchSinToken('auth', { correo, password }, 'POST');
		if (loginRes?.status === 200) {
			const user = loginRes.usuario;
			localStorage.setItem('login_token', user.token);
			setAuth({
				uid: user.uid,
				checking: false,
				logged: true,
				nombre: user.nombre,
				correo: user.correo,
			});
		} else {
			setAuth({
				checking: false,
				logged: false,
			});
		}
	};

	const register = async (nombre, correo, password) => {
		const registerRes = await fetchSinToken('auth/registro', { nombre, correo, password }, 'POST');
		if (registerRes?.status === 200) {
			const user = registerRes.usuario;
			localStorage.setItem('login_token', user.token);
			setAuth({
				uid: user.uid,
				checking: false,
				logged: true,
				nombre: user.nombre,
				correo: user.correo,
			});
		} else {
			setAuth({
				checking: false,
				logged: false,
			});
		}
	};
	const verifyToken = useCallback(async () => {
		const token = localStorage.getItem('login_token');
		if (token) {
			const verifyRes = await fetchConToken('auth/token-check');
			if (verifyRes?.status === 200) {
				const user = verifyRes.usuario;
				localStorage.setItem('login_token', user.token);
				setAuth({
					uid: user.uid,
					checking: false,
					logged: true,
					nombre: user.nombre,
					correo: user.correo,
				});
			}
		} else {
			setAuth({
				checking: false,
				logged: false,
			});
		}
	}, []);

	const logout = () => {
		localStorage.removeItem('login_token');
		setAuth({
			checking: false,
			logged: false,
		});
	};

	return <AuthContext.Provider value={{ auth, login, register, logout, verifyToken }}>{children}</AuthContext.Provider>;
};
