import React from 'react';
import { connect } from 'react-redux';
import Content from './Content/Content';

const footer = (props) => {
    return (
        <Content show={props.show}/>
    );
}

const mapStateToProps = state => {
    return {
        show: state.show
    }
}

export default connect(mapStateToProps)(footer);