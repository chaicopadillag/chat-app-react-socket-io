import { types } from '../types/types';

const chatReducer = (chatState, acction) => {
	switch (acction.type) {
		case types.cargarUsuarios:
			return {
				...chatState,
				usuarios: acction.payload,
			};
		case types.chatActive:
			if (chatState.chatActive?.uid === acction.payload.uid) return chatState;
			return {
				...chatState,
				chatActive: acction.payload,
				mensajes: [],
			};
		case types.getMessageNew:
			if (chatState.chatActive?.uid === acction.payload.para || chatState.chatActive?.uid === acction.payload.de) {
				return {
					...chatState,
					mensajes: [...chatState.mensajes, acction.payload],
				};
			} else {
				return chatState;
			}
		case types.getMessages:
			return {
				...chatState,
				mensajes: acction.payload,
			};
		case types.clearChatState:
			return {
				uid: '',
				chatActive: null,
				usuarios: [],
				mensajes: [],
			};
		default:
			return chatState;
	}
};

export default chatReducer;
