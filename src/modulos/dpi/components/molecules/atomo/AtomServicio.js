import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { getServicioxTipo } from "../../../../../conexion/conexionServicio";
const AtomServicio = ({ idtiposervicio }) => {
  const [dataServicio, setDataServicio] = useState([]);
  useEffect(() => {
    getServicioxTipo(idtiposervicio).then((tiposer) => {
      setDataServicio(tiposer);
    });
  }, []);

  return (
    <>
      {dataServicio.map((objServ) => {
        return (
          <li>
            <NavLink to={"/services/service"} className="subItem">
             {objServ.servicio}
            </NavLink>
          </li>
        );
      })}
    </>
  );
};

export default AtomServicio;
