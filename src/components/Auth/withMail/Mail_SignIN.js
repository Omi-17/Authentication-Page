import React from 'react';
import Styling from './withMail.module.css';

const mail = (props) => {
    return (
        <div className={Styling.withMail}>
            <form>
                <div className={Styling.form}>
                    
                    <h3>Email</h3>
                    <input type='text' placeholder="✉️ Your e-mail"></input>
                    <h3>Password</h3>
                    <input type='text' placeholder="🔒 *********"></input>

                    <strong><p><span className={Styling.forgot}><a href="#">Forgot Password ?</a></span></p></strong>

                </div>
            </form>
        </div>
    );
}

export default mail;