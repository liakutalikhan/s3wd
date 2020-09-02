import React from 'react';
import './App.css';
import {BrowserRouter as Router} from 'react-router-dom'
import NavBar from './component/NavBar';
import Footer from './component/Footer';
import AppRouter from './component/AppRouter';
function App() {
  return (
    <>
      <Router>
        <NavBar/>
        <AppRouter/>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
