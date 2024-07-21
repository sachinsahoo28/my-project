import React from 'react';
import { Link } from 'react-router-dom';

const TrendingAndFilters = () => {
  return (
    <div className="bg-white py-2 px-4 flex items-center justify-between shadow-sm rounded mb-4">
      <div className="flex items-center">
        <span className="font-bold text-yellow-500 mr-2">⚡ Trending Now:</span>
        <span className="text-gray-800">CBSE Class 12 Physics Question Paper 2024 Set 3</span>
        <a href="#" className="text-blue-500 ml-2">Check Now &gt;</a>
      </div>
      <div className="flex space-x-2">
        <button className="px-3 py-1 bg-gray-200 text-gray-800 rounded text-sm">All News</button>
        <button className="px-3 py-1 bg-gray-200 text-gray-800 rounded text-sm">College News</button>
        <button className="px-3 py-1 bg-gray-200 text-gray-800 rounded text-sm">Exam News</button>
        <Link to="/admission-2024">
          <button className="px-3 py-1 bg-gray-200 text-gray-800 rounded text-sm hover:bg-blue-500 hover:text-white">
            Admission 2024
          </button>
        </Link>
      </div>
    </div>
  );
};

export default TrendingAndFilters;
