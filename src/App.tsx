import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AppBar from './components/ui/Header/Header';
import Footer from './components/ui/Footer/Footer';
import Home from './pages/Home/Home';

function App() {
  return (
    <BrowserRouter>
    <AppBar />
    <div className="wrap-container container-fluid">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
    <Footer />
  </BrowserRouter>
  );
}

export default App;
