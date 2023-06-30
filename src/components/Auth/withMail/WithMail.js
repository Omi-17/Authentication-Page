import React from "react";
import { connect } from "react-redux";
import "./withMail.css";
import axios from "axios";

const mail = (props) => {
  const data = {};
  let showField = null;
  let footer = `Don't have an account? `;
  let handler = "Sign Up";

  if (props.show == "SIGN UP") {
    showField = (
      <div className="user-box">
        <input
          required=""
          name=""
          type="text"
          onChange={(event) => inputChangeHandler(event, "name")}
        />
        <label>Name</label>
      </div>
    );
    footer = `Already have an account? `;
    handler = "Login";
  }

  const inputChangeHandler = (event, type) => {
    data[type] = event.target.value;
  };

  const authenticationType = (event) => {
    event.preventDefault();
    props.authType();
  };

  const formSubmission = (event) => {
    
    props.onAuthentication(data)
  };

  return (
    <div className="login-box">
      <p>{props.show}</p>
      <form onSubmit={(event) => formSubmission(event)}>
        {showField}
        <div className="user-box">
          <input
            required=""
            name=""
            type="text"
            onChange={(event) => inputChangeHandler(event, "email")}
          />
          <label>Email</label>
        </div>
        <div className="user-box">
          <input
            required=""
            name=""
            type="password"
            onChange={(event) => inputChangeHandler(event, "password")}
          />
          <label>Password</label>
        </div>
        <a href="" onClick={(event) => formSubmission(event)}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Submit
        </a>
      </form>
      <p>
        {footer}
        <a href="" className="a2" onClick={authenticationType}>
          {handler}
        </a>
      </p>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    authType: () => dispatch({ type: "SWITCH" }),
    onAuthentication: (data) => dispatch({type: "AUTHENTICATION", data: data})
  };
};

export default connect(null, mapDispatchToProps)(mail);