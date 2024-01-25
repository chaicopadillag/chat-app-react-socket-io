import React, { createContext, useReducer } from 'react';
import chatReducer from '../reducers/chatReducer';

const initialChat = {
	uid: '',
	chatActive: null,
	usuarios: [],
	mensajes: [],
};

export const ChatContext = createContext();

export const ChatProvider = ({ children }) => {
	const [chatState, dispatch] = useReducer(chatReducer, initialChat);

	return (
		<ChatContext.Provider
			value={{
				chatState,
				dispatch,
			}}>
			{children}
		</ChatContext.Provider>
	);
};
