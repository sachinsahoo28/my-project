import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import TrendingAndFilters from './TrendingAndFilters';
import Admission2024 from './Admission2024.js';

const App = () => {
  return (
    <Router>
      <div>
        <TrendingAndFilters />
        <Routes>
          <Route path="/admission-2024" element={<Admission2024 />} />
          {/* Add other routes here if needed */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
