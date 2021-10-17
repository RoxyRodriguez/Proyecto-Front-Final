import React from 'react';
import {BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom';
import DpiRouter from './modulos/dpi/DpiRouter';
import AboutUsRouter from './modulos/conocenos/AboutUsRouter'
import OurDoctorRouter from './modulos/nuestroDoctor/OurDoctorRouter';
import ContactRouter from './modulos/contactanos/ContactRouter';
import serviceRouter from './modulos/servicio/serviceRouter';
import CitaRouter from './modulos/cita/CitaRouter';

const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/dpi" component={DpiRouter}/>
          <Route path="/about" component={AboutUsRouter}/>
          <Route path="/ourDoctor" component={OurDoctorRouter}></Route>
          <Route path="/services/service" component ={serviceRouter}></Route>
          <Route path="/contact" component={ContactRouter}></Route>          
          <Route path="/cita" component={CitaRouter}></Route>
          <Redirect to="/dpi" />
        </Switch>
      </Router>
    </>
  )
}

export default App
