import React, { useContext, useEffect } from 'react';
import { createContext } from 'react';
import { AuthContext } from '../auth/AuthContext';
import { useSocket } from '../hooks/useSocket';
import { ChatContext } from './ChatContext';
import { types } from '../types/types';
import { scrollToBottomAnimated } from '../helpers/scrollToBottom';

export const SocketContext = createContext();

export const SocketProvider = ({ children }) => {
	const { auth } = useContext(AuthContext);
	const { socket, online, conectarSocket, desconectarSocket } = useSocket(process.env.REACT_APP_HOST_BACK_END);
	const { dispatch } = useContext(ChatContext);

	useEffect(() => {
		if (auth.logged) {
			conectarSocket();
		}
	}, [auth, conectarSocket]);

	useEffect(() => {
		if (!auth.logged) {
			desconectarSocket();
		}
	}, [auth, desconectarSocket]);

	// TODO: app
	useEffect(() => {
		socket?.on('listas-usuarios', (usuarios) => {
			dispatch({
				type: types.cargarUsuarios,
				payload: usuarios,
			});
		});
	}, [socket, dispatch]);

	useEffect(() => {
		socket?.on('mensaje-uno-a-uno', (mensaje) => {
			dispatch({
				type: types.getMessageNew,
				payload: mensaje,
			});
			scrollToBottomAnimated('messages');
		});
	}, [socket, dispatch]);

	return <SocketContext.Provider value={{ socket, online }}>{children}</SocketContext.Provider>;
};
