import React from 'react';

const SearchBox = () => {
	return (
		<div className="border-b-2 py-4 px-2">
			<input className="py-2 px-2 border-2 border-gray-200 rounded-2xl w-full" placeholder="Buscar chat" type="text" />
		</div>
	);
};

export default SearchBox;
