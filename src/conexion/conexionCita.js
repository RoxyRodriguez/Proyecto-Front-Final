import axios from 'axios';
import { URL_BACKEND } from '../environments/environments';

const transformaFechaServidor = (fecha)=>{
    let arrayfecha = fecha.split('/');
    return arrayfecha[2]+'-'+arrayfecha[1]+'-'+arrayfecha[0];
  }
  

export const postCita =  async (formulario,fecha,idhora)=>{
        fecha = transformaFechaServidor(fecha);

        let objCita = {
            "idtipodocumento":formulario.cbx_tipo_documento,
            "numerodocumento": formulario.txt_dni,
            "apellidos": formulario.txt_apellidos,
            "nombres": formulario.txt_nombres,
            "email": formulario.txt_email,
            "celular": formulario.txt_celular,
            "idservicio":formulario.cbx_servicio,
            "idhora": idhora,
            "fecha": fecha
        }


        const endpoint = `${URL_BACKEND}/cita`;
    
        const response = await axios.post(
            endpoint,
            JSON.stringify(objCita),
            {
                headers: {
                    'Content-type': 'application/json'
                }
            }
        );

    
        return response.data[0];
    
    }