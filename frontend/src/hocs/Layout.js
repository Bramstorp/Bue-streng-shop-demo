import React from "react";
import Navbar from "../components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";

const Layout = (props) => (
  <div>
    <Navbar />
    <div className="container">{props.children}</div>
  </div>
);

export default Layout;
