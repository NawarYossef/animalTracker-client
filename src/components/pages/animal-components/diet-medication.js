import React from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import Navbar from "./navbar";
import { Route, withRouter } from "react-router-dom";

export function DietAndMedication(props) {
  return (  
    <div className=" col-12">
      <h2>Diet and Medication</h2>
    </div>
  );
}

export default connect()(DietAndMedication);