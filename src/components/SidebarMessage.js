import React, { useContext } from 'react';
import { AuthContext } from '../auth/AuthContext';
import { ChatContext } from '../context/ChatContext';
import InboxPeople from './InboxPeople';
import SearchBox from './SearchBox';

const SidebarMessage = () => {
	const { chatState } = useContext(ChatContext);
	const { auth } = useContext(AuthContext);
	const { usuarios } = chatState;
	const { uid } = auth;
	return (
		<div className="flex flex-col w-2/5 border-r-2">
			<SearchBox />
			<div className="overflow-y-auto">
				{usuarios
					.filter((user) => user.uid !== uid)
					.map((usuario) => (
						<InboxPeople key={usuario.uid} {...usuario} />
					))}
			</div>
		</div>
	);
};

export default SidebarMessage;
