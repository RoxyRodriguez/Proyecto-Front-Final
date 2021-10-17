import React,{ useState } from "react";
import CitaBotones from "./components/CitaBotones";
import CitaCita from "./components/CitaCita";
import CitaFooter from "./components/CitaFooter";
import CitaFormulario from "./components/CitaFormulario";
import DpiHeader from "../dpi/components/DpiHeader";
import CitaTitle from "./components/CitaTitle";
import Swal from "sweetalert2"
import { postCita } from "../../conexion/conexionCita";

const CitaRouter = () => {
  let fechaactual = new Date();
  const [fecha, setFecha] = useState(fechaactual.toLocaleDateString());
  const [idHora, setIdHora] = useState("");
  const [nombreHorario, setNombreHorario] = useState("");

  const [formulario, setFormulario] = useState({
    cbx_tipo_documento:"",
    txt_dni: "",
    txt_nombres: "",
    txt_apellidos:"",
    cbx_servicio: "",
    txt_celular: "",
    txt_email: "",
  });

  const recibeFechaPedido = (fecha) => setFecha(fecha);

  const recibeHoraPedido = (idHora, horaInicio, HoraFin) => {
    let nombreHora = horaInicio + " - " + HoraFin;
    setIdHora(idHora);
    setNombreHorario(nombreHora);
  };

  const handleChange = (e) => {
    let objTemporal = {
      ...formulario,
      [e.target.name]:
        e.target.type === "checkbox" ? e.target.checked : e.target.value,
    };
    setFormulario(objTemporal);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if(idHora===''){
      Swal.fire({
        icon: "error",
        title: "Error!",
        text: "Debe seleccionar una hora",
      });
      return false;
    }

    
    postCita(formulario, fecha, idHora).then((data) => {
      if (data.result === 1) {
        //limpiar el formulario
        let objTemporal = {
          cbx_tipo_documento:"",
          txt_dni: "",
          txt_nombres: "",
          txt_apellidos:"",
          cbx_servicio: "",
          txt_celular: "",
          txt_email: ""
        };
        setFormulario(objTemporal);
        setIdHora("");
        setNombreHorario("");
        setFecha("");

        //lanzar notificacion
        Swal.fire({
          icon: "success",
          title: "Éxito!",
          text: "Su solicitud fue enviada, Nos comunicaremos con Ud. para confirmar la Cita",
        });
      }
    });
  };

  return (
    <>
      <DpiHeader />
      <CitaTitle />
      <main id="main">
        <section id="cita" class="cita ">
          <div class="container" data-aos="fade-up">
            <form onSubmit={handleSubmit}>
              <div class="row">
                <CitaFormulario formulario={formulario} handleChange={handleChange} />
                <div class="col-md-8">
                  <CitaCita recibeFechaPedido={recibeFechaPedido} recibeHoraPedido={recibeHoraPedido} fecha={fecha} />
                  <CitaBotones />
                </div>
              </div>
            </form>
          </div>
        </section>
      </main>
      <CitaFooter />
    </>
  );
};

export default CitaRouter;
