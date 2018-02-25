import React from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { Route, withRouter } from "react-router-dom";
import AnimalNavbar from "./animal-navbar";

export function Assessment(props) {
  return (
    <div className=" col-12">
      <AnimalNavbar />
      <h2>Assessment</h2>
      <form>
        <label>
          <h3>ATTITUDE</h3>
          <input type="text" name="attitude" />
        </label>
        <label>
          <h3>HYDRATION</h3>
          <input type="text" name="hydration" />
        </label>
        <label>
          <h3>COAT/SKIN</h3>
          <input type="text" name="coat-skin" />
        </label>
        <label>
          <h3>EYES</h3>
          <input type="text" name="eyes" />
        </label>
        <label>
          <h3>EARS</h3>
          <input type="text" name="ears" />
        </label>
        <label>
          <h3>NOSE AND THROAT</h3>
          <input type="text" name="nose-throat" />
        </label>
        <label>
          <h3>LEGS AND PAWS</h3>
          <input type="text" name="legs-paws" />
        </label>
        <label>
          <h3>WEIGHT</h3>
          <input type="number" name="weight" />
          <span>lbs.</span>
        </label>
        <label>
          <h3>TREATMENT AND RECOMMENDATIONS</h3>
          <input type="text" name="treatment" />
        </label>
      </form>
    </div>
  );
}

export default connect()(Assessment);
