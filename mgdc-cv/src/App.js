// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './components/MainPage';
import './index.css';


const App = () => {
  return (
    <Router>
      <div>
        <h1>React App with Routing</h1>
        <Routes>
          <Route path="/" element={<MainPage />} />

        </Routes>
      </div>
    </Router>
  );
};

export default App;
