import React from 'react';
import { AuthProvider } from './auth/AuthContext';
import { ChatProvider } from './context/ChatContext';
import { SocketProvider } from './context/SocketContext';
import AppRouter from './routers/AppRouter';

const ChatApp = () => {
	return (
		<AuthProvider>
			<ChatProvider>
				<SocketProvider>
					<AppRouter />
				</SocketProvider>
			</ChatProvider>
		</AuthProvider>
	);
};

export default ChatApp;
