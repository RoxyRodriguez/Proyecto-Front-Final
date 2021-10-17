import { URL_BACKEND } from "../environments/environments";
import axios from "axios";

export const getTipoServicio = async ()=>{
    const url = `${URL_BACKEND}/tiposervicio`;
    //console.log(url);
    const rpta = await axios.get(url);
	return rpta.data;
}