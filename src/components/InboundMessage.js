// TODO: Mensaje de Entrada
import React from 'react';
import PropTypes from 'prop-types';
import { horaMes } from '../helpers/formaterDate';

const InboundMessage = ({ message }) => {
	return (
		<div className="flex justify-start mb-4">
			<img alt="" className="object-cover h-8 w-8 rounded-full" src="https://source.unsplash.com/vpOeXr5wmR4/600x600" />
			<div className="ml-2 py-3 px-4 bg-gray-400 rounded-br-3xl rounded-tr-3xl rounded-tl-xl text-white">
				{message.mensaje}
				<br />
				<span className="block w-full py-1 text-blue-100 text-xs text-right">{horaMes(message.createdAt)}</span>
			</div>
		</div>
	);
};

InboundMessage.propTypes = {
	message: PropTypes.object.isRequired,
};

export default InboundMessage;
