import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Tabs from './Tabs';

function App() {
  return (
    <Router>
      <div className="App">
        <center>
          <h1>Forms</h1>
        </center>
        <Routes>
          <Route path="/" element={<Tabs />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
