import React from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import Navbar from "./navbar";
import { Route, withRouter } from "react-router-dom";

export function Behavior(props) {
  return (  
    <div className=" col-12">
      <h3>Behavior</h3>
    </div>
  );
}

export default connect()(Behavior);
