import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { getTipoServicio } from "../../../../conexion/conexionTipoServicio";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faChevronDown,
  faChevronRight,
  faTimes,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import AtomServicio from "./atomo/AtomServicio";
const MoleTipoServicio = () => {
  const [dataTipoServicio, setDataTipoServicio] = useState([]);

  useEffect(() => {
    getTipoServicio().then((tiposer) => {
      setDataTipoServicio(tiposer);
    });
  }, []);
  return (
    <>
      {dataTipoServicio.map((objTipoServ) => {
        return (
          <li className="menu-item-has-children">
            <NavLink
              to={"#"}
              className="collapsed"
              data-bs-toggle="collapse"
              data-bs-target="#menuVertical7-6"
              aria-controls="menuVertical7-6"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              {objTipoServ.tipo_servicio}
              <FontAwesomeIcon className="i" icon={faChevronRight} />
            </NavLink>
            <ul className="sub-menu collapse" id="menuVertical7-6">
              <AtomServicio idtiposervicio={objTipoServ.id} />
            </ul>
          </li>
        );
      })}
    </>
  );
};

export default MoleTipoServicio;
