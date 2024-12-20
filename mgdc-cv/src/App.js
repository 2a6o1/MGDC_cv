// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './components/MainPage';
import './index.css';


const App = () => {
  return (
    <Router>
      <div>

        <Routes>
          <Route path="/" element={<MainPage />} />

        </Routes>
      </div>
    </Router>
  );
};

export default App;
