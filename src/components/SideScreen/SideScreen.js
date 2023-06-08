import React from 'react';
import Styling from './SideScreen.module.css';
import Logo from '../../assets/img1.jpg';

const sideScreen = (props) => {
    return(
        <div className={Styling.SideScreen}>
            <img src={Logo}/>
        </div>
    )
}

export default sideScreen;