import React, { useContext } from 'react';
import { AuthContext } from '../auth/AuthContext';
import { ChatContext } from '../context/ChatContext';
import { SocketContext } from '../context/SocketContext';
import useForm from '../hooks/useForm';

const SendMessage = () => {
	const { socket } = useContext(SocketContext);
	const { auth } = useContext(AuthContext);
	const { chatState } = useContext(ChatContext);
	const [formValues, handleChange, reset] = useForm({ mensaje: '' });
	const { mensaje } = formValues;

	const handleSendMessage = (e) => {
		e.preventDefault();

		if (mensaje === '') {
			return;
		}
		socket?.emit('mensaje-uno-a-uno', {
			de: auth.uid,
			para: chatState.chatActive?.uid,
			mensaje,
		});
		reset();
	};

	return (
		<div className="py-4 mb-4 px-4 bg-white">
			<form method="POST" onSubmit={handleSendMessage}>
				<div className="p-1 pr-0 flex items-center">
					<input
						type="text"
						placeholder="Escribe tu mensaje aquí..."
						className="border-2 border-gray-200 rounded-2xl bg-gray-100 py-4 px-4 w-full"
						name="mensaje"
						onChange={handleChange}
						value={mensaje}
						autoComplete="off"
					/>
					<button type="submit" className=" bg-blue-400 text-white text-base font-semibold tracking-wide uppercase p-3 rounded shadow hover:bg-blue-500 py-4 px-4 ml-1">
						Enviar
					</button>
				</div>
			</form>
		</div>
	);
};

export default SendMessage;
