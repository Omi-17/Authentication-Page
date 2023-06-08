import React from 'react';
import WithGoogle from './withGoogle/withGoogle';
import Mail_SignIN from './withMail/Mail_SignIN';
import Mail_SignUp from '../../components/Login/withMail/Mail_SignUp';
import { Route, Routes } from 'react-router-dom';

const auth = (props) => {
    return(
        <div>
            <WithGoogle />
            <Routes>
                <Route path='/' Component={Mail_SignIN}/>
                <Route path='/SignIn' Component={Mail_SignIN}/>
                <Route path='/SignUp' Component={Mail_SignUp}/>
            </Routes>
        </div>
    )
};

export default auth;