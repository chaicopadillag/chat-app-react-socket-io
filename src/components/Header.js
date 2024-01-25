import React, { useContext } from 'react';
import { AuthContext } from '../auth/AuthContext';
import { ChatContext } from '../context/ChatContext';
import { types } from '../types/types';

const Header = () => {
	const { auth, logout } = useContext(AuthContext);
	const { dispatch } = useContext(ChatContext);

	const handleLogout = () => {
		dispatch({
			type: types.clearChatState,
		});
		logout();
	};

	return (
		<div className="grid grid-cols-8 gap-x-4 py-5 px-5 border-b-2 h-24">
			<div className="col-span-2 flex items-center justify-between">
				<div className="font-semibold text-2xl">Chat Code</div>
				<button className="font-bold text-red-400 px-4 py-2 transition duration-300 ease-in-out mr-8" type="button" onClick={handleLogout}>
					Salir
				</button>
			</div>
			<div className="col-span-4">
				<input className=" border-2 border-gray-200  rounded-2xl bg-gray-100 py-4 px-4 w-full" placeholder="Buscar en el mensaje" type="text" />
			</div>
			<div className="col-span-2 flex flex-wrap justify-end items-center">
				<div className="mr-4">{auth.nombre}</div>
				<div className="h-12 w-12 p-2 bg-blue-400 rounded-full text-white font-semibold flex items-center justify-center text-2xl">{auth.nombre.slice(0, 1)}</div>
			</div>
		</div>
	);
};

export default Header;
