import React from 'react';

const Footer = () => {
  const newsItems = [
    {
      title: 'What is the latest program that you are offering in your institute...',
      date: '27 Dec 2020',
      category: 'Lucknow Public College of Professional Studies...',
    },
    {
      title: 'What is the latest program that you are offering in your institute...',
      date: '27 Dec 2020',
      category: 'Lucknow Public College of Professional Studies...',
    },
    {
      title: 'What is the latest program that you are offering in your institute...',
      date: '27 Dec 2020',
      category: 'Lucknow Public College of Professional Studies...',
    },
    {
      title: 'What is the latest program that you are offering in your institute...',
      date: '27 Dec 2020',
      category: 'Lucknow Public College of Professional Studies...',
    },
    // Add more items as needed
  ];

  return (
    <footer className="py-4 shadow rounded mt-8 mb-8 mx-auto border border-yellow-600" style={{ backgroundColor: '#FFF9DB', maxWidth: '90%' }}>
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-4 px-4">
          <h3 className="text-lg font-bold" style={{ color: '#B35B00' }}>Featured News</h3>
          <span className="text-gray-800">&gt;</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-4">
          {newsItems.map((item, index) => (
            <div key={index} className="bg-white p-4 shadow-md rounded">
              <h4 className="text-gray-800">{item.title}</h4>
              <p className="text-gray-600">{item.date}</p>
              <p className="text-gray-700">{item.category}</p>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
