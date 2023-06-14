import React from 'react'
import './App.css';
import Button from './components/Button/Button';
import Header from './components/Header/Header';
import Auth from './components/Auth/Auth';
import SignIn from './components/Footer/SignIn/SignIn';
import SignUp from './components/Footer/SignUp/SignUp';
import SideScreen from './components/SideScreen/SideScreen';
import { Route, Routes } from 'react-router-dom';

function App(props) {
  return (
    <div className="App">
      <Header />
      <Auth />
      <Button />
      <Routes>
        <Route path='/' Component={SignIn} />
        <Route path='/SignIn' Component={SignIn} />
        <Route path='/SignUp' Component={SignUp} />
      </Routes>
      <SideScreen />
    </div>
  );
}

export default App;
