import axios from 'axios';
import { URL_BACKEND } from '../environments/environments';

export const getServicio = async () => {
	let response = await axios.get(`${URL_BACKEND}/servicio`);
	return response.data;
};
export const getServicioxTipo = async (id) => {

	let response = await axios.get(`${URL_BACKEND}/servicioxtipo/${id}`);
	return response.data;
};