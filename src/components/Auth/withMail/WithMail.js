import React from 'react';
import Styling from './withMail.module.css';

const mail = (props) => {
    let showField = null;
    if (props.show == "SIGN_UP") 
    {
        showField = (
            <div>
                <h3>Name</h3>
                <input type="text" name="" placeholder="Your Name"></input>
            </div>
        )
    }
    return (
        <div className={Styling.withMail}>
            <form>
                <div className={Styling.form}>
                    {showField}
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