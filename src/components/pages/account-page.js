import React from "react";
import { connect } from "react-redux";
import requiresLogin from "../requires-login";
import { fetchProtectedData } from "../../actions/protected-data";
import "./styles/account-page.css";

export class AccountPage extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchProtectedData());
  }

  render() {
    return (
      <div className="account">
        <h2>My ACCOUNT</h2>
        <form>
          <label>
            <h3>USER NAME</h3>
            <input type="text" name="first-name" />
          </label>
          <label>
            <h3>FIRST NAME</h3>
            <input type="text" name="first-name" />
          </label>
          <label>
            <h3>LAST NAME</h3>
            <input type="text" name="last-name" />
          </label>
          <label>
            <h3>SHELTER/CLINIC NAME</h3>
            <input type="text" name="shelter-name" />
          </label>
          <label>
            <h3>ADDRESS</h3>
            <input type="text" name="shelter-name" />
          </label> 
          <input type="submit" value="Submit" className="submit-button" />
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { currentUser } = state.auth;
  return {
    username: state.auth.currentUser.username,
    name: `${currentUser.firstName} ${currentUser.lastName}`,
    protectedData: state.protectedData.data
  };
};

export default requiresLogin()(connect(mapStateToProps)(AccountPage));
