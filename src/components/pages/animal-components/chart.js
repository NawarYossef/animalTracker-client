import React from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { Route, withRouter } from "react-router-dom";
import AnimalNavbar from "./animal-navbar";

export function Chart(props) {
  return (  
    <div className=" col-12">
    <AnimalNavbar />
      <h2>Chart</h2>
    </div>
  );
}

export default connect()(Chart);
