import React, { Component } from 'react';
import Styling from '../../Footer/Footer.module.css';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

const signIn = (props) => {
    return (
        <div className={Styling.Footer}>
            <p>Don't have an account yet? <NavLink to="/SignUp" >Create an Account</NavLink></p>
        </div>
    )

}
export default signIn;