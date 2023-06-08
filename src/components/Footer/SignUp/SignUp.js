import React, { Component } from 'react';
import Styling from '../../Footer/Footer.module.css';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

const signUp = (props) => {
    return (
        <div className={Styling.Footer}>
            <p>Already have an account? <NavLink to="/SignIn">Sign In</NavLink></p>
        </div>
    );
}

export default signUp;