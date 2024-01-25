import React, { useContext } from 'react';
import { ChatContext } from '../context/ChatContext';
import { types } from '../types/types';
import PropTypes from 'prop-types';
import { fetchConToken } from '../helpers/fetchApi';
import { scrollToBottom } from '../helpers/scrollToBottom';

const InboxPeople = ({ uid, nombre, correo, online }) => {
	const { chatState, dispatch } = useContext(ChatContext);

	const handleChangeChatActive = async () => {
		dispatch({
			type: types.chatActive,
			payload: { uid, nombre, correo, online },
		});

		const mensajes = await fetchConToken(`mensajes/${uid}`);
		dispatch({
			type: types.getMessages,
			payload: mensajes.ultimosMensajes,
		});
		scrollToBottom('messages');
	};

	return (
		<div
			className={`cursor-pointer flex flex-row py-4 px-2 items-center border-b-2 ${chatState.chatActive?.uid === uid ? 'border-l-4 border-blue-400' : ''}`}
			onClick={handleChangeChatActive}>
			<div className="w-1/4">
				<div className="h-12 w-12 p-2 bg-blue-400 rounded-full text-white font-semibold flex items-center justify-center text-2xl">{nombre.slice(0, 1)}</div>
			</div>
			<div className="w-full">
				<div className="text-lg font-semibold">{nombre}</div>
				{online ? (
					<label className="text-green-500 flex items-center">
						<span className="h-4 w-4 p-2 bg-green-500 rounded-full flex mr-1"></span>
						Online
					</label>
				) : (
					<label className="text-gray-500 flex items-center">
						<span className="h-4 w-4 p-2 bg-red-500 rounded-full flex mr-1"></span>
						Offline
					</label>
				)}
			</div>
		</div>
	);
};

InboxPeople.propTypes = {
	uid: PropTypes.string.isRequired,
	nombre: PropTypes.string.isRequired,
	correo: PropTypes.string.isRequired,
	online: PropTypes.bool.isRequired,
};

export default InboxPeople;
