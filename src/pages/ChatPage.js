import React from 'react';
import Chat from '../components/Chat';
import Header from '../components/Header';
import InfoContact from '../components/InfoContact';
import SidebarMessage from '../components/SidebarMessage';
import moment from 'moment';
import 'moment/locale/es';
moment.locale('es');
const ChatPage = () => {
	return (
		<div className="h-screen overflow-hidden flex items-center justify-center" style={{ background: '#edf2f7' }}>
			<div className="container mx-auto shadow-lg rounded-lg h-5/6 bg-white overflow-hidden">
				<Header />
				<div className="flex flex-row justify-between altura">
					<SidebarMessage />
					<Chat />
					<InfoContact />
				</div>
			</div>
		</div>
	);
};

export default ChatPage;
