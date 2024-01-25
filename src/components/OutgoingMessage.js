// TODO: Mensaje de Salida
import React from 'react';
import PropTypes from 'prop-types';
import { horaMes } from '../helpers/formaterDate';

const OutgoingMessage = ({ message }) => {
	return (
		<div className="flex justify-end mb-4">
			<div className="mr-2 py-3 px-4 bg-blue-400 rounded-bl-3xl rounded-tl-3xl rounded-tr-xl text-white">
				{message.mensaje}
				<br />
				<span className="block w-full py-1 text-gray-200 text-xs text-left">{horaMes(message.createdAt)}</span>
			</div>
			<img alt="" className="object-cover h-8 w-8 rounded-full" src="https://source.unsplash.com/vpOeXr5wmR4/600x600" />
		</div>
	);
};

OutgoingMessage.propTypes = {
	message: PropTypes.object.isRequired,
};

export default OutgoingMessage;
