import React from 'react';
import Styling from './withGoogle.module.css';

const withGoogle = (props) => {
    return (
        <div className={Styling.withGoogle}>
            <form>
                <div className={Styling.form}>
                    <input type='text' placeholder='Sign In with Google' />
                    <p className={Styling.strikethrough}><span>or Sign in with Email</span></p>
                </div>
            </form>
        </div>
    );
}

export default withGoogle;