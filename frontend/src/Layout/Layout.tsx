import React, { FunctionComponent } from "react";
import { Navbar } from "./Navbar";
import "bootstrap/dist/css/bootstrap.min.css";

export const Layout: FunctionComponent = (props) => (
  <div>
    <Navbar />
    <div className="container">{props.children}</div>
  </div>
);
