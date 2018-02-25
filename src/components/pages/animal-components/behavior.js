import React from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { Route, withRouter } from "react-router-dom";
import AnimalNavbar from "./animal-navbar";

export function Behavior(props) {
  return (  
    <div className=" col-12">
    <AnimalNavbar />
      <h3>Behavior</h3>
    </div>
  );
}

export default connect()(Behavior);
