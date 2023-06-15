import React from 'react';
import WithGoogle from './withGoogle/withGoogle';
import WithMail from './withMail/WithMail';
import { connect } from 'react-redux';

const auth = (props) => {
    return(
        <div>
            <WithGoogle />
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