import React from 'react';
import Styling from './Button.module.css'

const button = (props) => {
    return (
        <div className={Styling.Button}>
            <button>Login</button>
        </div>
    );
}
export default button;