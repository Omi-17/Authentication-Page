import React from 'react'
import './App.css';
import Button from './components/Button/Button';
import Header from './components/Header/Header';
import Auth from './components/Auth/Auth';
import Footer from './components/Footer/Footer';
import SideScreen from './components/SideScreen/SideScreen';

function App(props) {
  return (
    <div className="App">
      <Header />
      <Auth />
      <Button />
      <Footer/>
      <SideScreen />
    </div>
  );
}

export default App;
