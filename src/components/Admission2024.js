import React from 'react';

const newsItems = [
  {
    title: 'What is the latest program that you are offering in your institute...',
    date: '27 Dec 2020',
    category: 'Lucknow Public College of Professional Studies...',
    image: 'ig1.png', // replace with the correct image URL
  },
  {
    title: 'What is the latest program that you are offering in your institute...',
    date: '27 Dec 2020',
    category: 'Lucknow Public College of Professional Studies...',
    image: 'ig2.png', // replace with the correct image URL
  },
  {
    title: 'What is the latest program that you are offering in your institute...',
    date: '27 Dec 2020',
    category: 'Lucknow Public College of Professional Studies...',
    image: 'ig3.png', // replace with the correct image URL
  },
  {
    title: 'What is the latest program that you are offering in your institute...',
    date: '27 Dec 2020',
    category: 'Lucknow Public College of Professional Studies...',
    image: 'ig4.png', // replace with the correct image URL
  },
  {
    title: 'What is the latest program that you are offering in your institute...',
    date: '27 Dec 2020',
    category: 'Lucknow Public College of Professional Studies...',
    image: 'ig1.png', // replace with the correct image URL
  },
  {
    title: 'What is the latest program that you are offering in your institute...',
    date: '27 Dec 2020',
    category: 'Lucknow Public College of Professional Studies...',
    image: 'ig2.png', // replace with the correct image URL
  },
  {
    title: 'What is the latest program that you are offering in your institute...',
    date: '27 Dec 2020',
    category: 'Lucknow Public College of Professional Studies...',
    image: 'ig3.png', // replace with the correct image URL
  },
  {
    title: 'What is the latest program that you are offering in your institute...',
    date: '27 Dec 2020',
    category: 'Lucknow Public College of Professional Studies...',
    image: 'ig4.png', // replace with the correct image URL
  },
  {
    title: 'What is the latest program that you are offering in your institute...',
    date: '27 Dec 2020',
    category: 'Lucknow Public College of Professional Studies...',
    image: 'ig1.png', // replace with the correct image URL
  },
  {
    title: 'What is the latest program that you are offering in your institute...',
    date: '27 Dec 2020',
    category: 'Lucknow Public College of Professional Studies...',
    image: 'ig2.png', // replace with the correct image URL
  },
  {
    title: 'What is the latest program that you are offering in your institute...',
    date: '27 Dec 2020',
    category: 'Lucknow Public College of Professional Studies...',
    image: 'ig3.png', // replace with the correct image URL
  },
  {
    title: 'What is the latest program that you are offering in your institute...',
    date: '27 Dec 2020',
    category: 'Lucknow Public College of Professional Studies...',
    image: 'ig4.png', // replace with the correct image URL
  },
  {
    title: 'What is the latest program that you are offering in your institute...',
    date: '27 Dec 2020',
    category: 'Lucknow Public College of Professional Studies...',
    image: 'ig1.png', // replace with the correct image URL
  },
  {
    title: 'What is the latest program that you are offering in your institute...',
    date: '27 Dec 2020',
    category: 'Lucknow Public College of Professional Studies...',
    image: 'ig2.png', // replace with the correct image URL
  },
  {
    title: 'What is the latest program that you are offering in your institute...',
    date: '27 Dec 2020',
    category: 'Lucknow Public College of Professional Studies...',
    image: 'ig3.png', // replace with the correct image URL
  },
  {
    title: 'What is the latest program that you are offering in your institute...',
    date: '27 Dec 2020',
    category: 'Lucknow Public College of Professional Studies...',
    image: 'ig4.png', // replace with the correct image URL
  },
  // Add more items as needed
];

const Admission2024 = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {newsItems.map((item, index) => (
          <div key={index} className="bg-white shadow-md rounded p-4 hover:shadow-lg transition-shadow duration-300">
            <div className="overflow-hidden rounded mb-4">
              <img src={item.image} alt={item.title} className="w-full h-40 object-cover transform hover:scale-105 transition-transform duration-300" />
            </div>
            <h4 className="text-gray-800 hover:text-blue-500 transition-colors duration-300">{item.title}</h4>
            <p className="text-gray-600 hover:text-blue-500 transition-colors duration-300">{item.date}</p>
            <p className="text-gray-700 hover:text-blue-500 transition-colors duration-300">{item.category}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Admission2024;
