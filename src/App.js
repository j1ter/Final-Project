import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import { GlobalStorage } from './Context/GlobalContext';

function App() {
  return (
    <BrowserRouter>
      <GlobalStorage>
        <Routes>
          <Route path="/*" element={<Home />} />
          <Route path="job-listings-with-filtering" element={<Home />} />
        </Routes>
      </GlobalStorage>
    </BrowserRouter>
  );
}

export default App;
