import React, { useContext } from 'react';
import { ChatContext } from '../context/ChatContext';
import Messages from './Messages';
import NotSelectedChat from './NotSelectedChat';
import SendMessage from './SendMessage';

const Chat = () => {
	const { chatState } = useContext(ChatContext);
	const { chatActive } = chatState;

	return (
		<div className="w-full flex flex-col justify-between bg-gray-100">
			<div className="flex flex-col px-4 mt-5 overflow-y-auto justify-between" id="messages">
				{!chatActive ? <NotSelectedChat /> : <Messages />}
			</div>
			{chatActive && <SendMessage />}
		</div>
	);
};

export default Chat;
