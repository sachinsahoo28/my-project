import React from 'react';

const Header = () => {
  return (
    <header className="bg-white shadow p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img src="/image.png" alt="Logo" className="h-10 mr-2" />
        </div>
        <nav>
          <ul className="flex space-x-4">
            <li className="flex items-center text-gray-700 hover:text-blue-500 cursor-pointer">
              University
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 ml-1"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 12a1 1 0 01-.707-.293l-4-4a1 1 0 111.414-1.414L10 9.586l3.293-3.293a1 1 0 111.414 1.414l-4 4A1 1 0 0110 12z"
                  clipRule="evenodd"
                />
              </svg>
            </li>
            <li className="flex items-center text-gray-700 hover:text-blue-500 cursor-pointer">
              Colleges
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 ml-1"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 12a1 1 0 01-.707-.293l-4-4a1 1 0 111.414-1.414L10 9.586l3.293-3.293a1 1 0 111.414 1.414l-4 4A1 1 0 0110 12z"
                  clipRule="evenodd"
                />
              </svg>
            </li>
            <li className="flex items-center text-gray-700 hover:text-blue-500 cursor-pointer">
              Exams
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 ml-1"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 12a1 1 0 01-.707-.293l-4-4a1 1 0 111.414-1.414L10 9.586l3.293-3.293a1 1 0 111.414 1.414l-4 4A1 1 0 0110 12z"
                  clipRule="evenodd"
                />
              </svg>
            </li>
            <li className="flex items-center text-gray-700 hover:text-blue-500 cursor-pointer">
              Courses
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 ml-1"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 12a1 1 0 01-.707-.293l-4-4a1 1 0 111.414-1.414L10 9.586l3.293-3.293a1 1 0 111.414 1.414l-4 4A1 1 0 0110 12z"
                  clipRule="evenodd"
                />
              </svg>
            </li>
            <li className="flex items-center text-gray-700 hover:text-blue-500 cursor-pointer">
              News
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 ml-1"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 12a1 1 0 01-.707-.293l-4-4a1 1 0 111.414-1.414L10 9.586l3.293-3.293a1 1 0 111.414 1.414l-4 4A1 1 0 0110 12z"
                  clipRule="evenodd"
                />
              </svg>
            </li>
          </ul>
        </nav>
        <div className="relative flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 absolute left-3 text-gray-400 pointer-events-none"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M14.293 12.707a1 1 0 011.414 0l3 3a1 1 0 01-1.414 1.414l-3-3a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
            <path
              fillRule="evenodd"
              d="M9 17a8 8 0 100-16 8 8 0 000 16zm0-2a6 6 0 100-12 6 6 0 000 12z"
              clipRule="evenodd"
            />
          </svg>
          <input
            type="text"
            placeholder="Search for Colleges, Exams, Courses & more..."
            className="border p-2 pl-8 rounded w-80"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
