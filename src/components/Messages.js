import React, { useContext } from 'react';
import { AuthContext } from '../auth/AuthContext';
import { ChatContext } from '../context/ChatContext';
import InboundMessage from './InboundMessage';
import OutgoingMessage from './OutgoingMessage';

const Messages = () => {
	const { auth } = useContext(AuthContext);
	const { chatState } = useContext(ChatContext);
	const { mensajes } = chatState;

	return (
		<>
			{mensajes.map((mensaje) => {
				return mensaje.de === auth.uid ? <OutgoingMessage key={mensaje._id} message={mensaje} /> : <InboundMessage key={mensaje._id} message={mensaje} />;
			})}
		</>
	);
};

export default Messages;
