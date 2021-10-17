import React from "react";
import { Route, Switch } from "react-router-dom";
import ServiceDpi from "./pages/ServiceDpi";
const serviceRouter = () => {
  return (
    <>
      <Switch>
        <Route path="/services/service" component={ServiceDpi} />
      </Switch>
    </>
  );
};

export default serviceRouter;
