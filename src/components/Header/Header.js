import React from 'react';
import Styling from './Header.module.css';

const header = (props) => {
    return (
        <div className={Styling.Header}>
            <h1>Login / Sign up</h1>
            <p>Log In with the data you entered during registration</p>
        </div>
    );
};
//✌
export default header;