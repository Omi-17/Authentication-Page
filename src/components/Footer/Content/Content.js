import React from 'react';
import Styling from '../../Footer/Footer.module.css';
import { connect } from 'react-redux';

const content = (props) => {

    const clickHandler = () => {
        props.onRedirect();
    }

    let showField = (
        <div className={Styling.Footer}>
            <p>Don't have an account yet? <a href="#" onClick={clickHandler}>Create an Account</a></p>
        </div>
    )
    if (props.show == "SIGN_UP") {
        showField = (
            <div className={Styling.Footer}>
                <p>Already have an account? <a href="#" onClick={clickHandler}>Sign In</a></p>
            </div>
        );
    }
    return (
        showField
    )
}

const mapDispatchToProps = dispatch => {
    return{
        onRedirect: () => dispatch({type: "SWITCH"})
    }
}

export default connect(null, mapDispatchToProps)(content);