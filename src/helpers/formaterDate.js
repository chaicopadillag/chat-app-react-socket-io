import moment from 'moment';
export const horaMes = (date) => {
	const fechaHoraMes = moment(date);
	return fechaHoraMes.format('HH:mm a | MMMM');
};
