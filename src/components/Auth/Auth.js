import React from 'react';
import WithMail from './withMail/WithMail';
import { connect } from 'react-redux';

const auth = (props) => {
    return(
        <div>
            <WithMail show={props.show}/>
        </div>
    )
};

const mapStateToProps = state => {
    return {
        show: state.show
    }
}

export default connect(mapStateToProps)(auth);