import React, { useContext } from 'react';
import { ChatContext } from '../context/ChatContext';

const InfoContact = () => {
	const { chatState } = useContext(ChatContext);
	if (!chatState.chatActive) {
		return <div className="w-2/5 border-l-2 px-5"></div>;
	}
	const { nombre, correo, online } = chatState.chatActive;
	return (
		<div className="w-2/5 border-l-2 px-5">
			<div className="flex flex-col">
				<div className="font-semibold text-xl py-4 mx-auto">{nombre}</div>
				<div className="h-64 w-64 mx-auto p-2 bg-blue-400 object-cover rounded-xl text-white font-semibold flex items-center justify-center text-2xl">{nombre.slice(0, 1)}</div>

				<div className={`font-semibold mx-auto py-4 flex items-center ${online ? 'text-green-400' : 'text-gray-500'}`}>
					{online ? <span className="h-4 w-4 p-2 bg-green-500 rounded-full flex mr-1"></span> : <span className="h-4 w-4 p-2 bg-red-500 rounded-full flex mr-1"></span>}
					{online ? 'Online' : 'Offline'}
				</div>
				<div className="font-light text-gray-600 mx-auto">
					<span className="font-bold text-gray-600">Correo: </span>
					{correo}
				</div>
			</div>
		</div>
	);
};

export default InfoContact;
