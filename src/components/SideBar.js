import React from 'react';

const SideBar = () => {
  const newsItems = [
    {
      title: 'What is the latest program that you are offering in your institute...',
      date: '27 Dec 2020',
      category: 'Lucknow Public College of Professional Studies...',
      imageUrl: 'image3.png'
    },
    {
      title: 'What is the latest program that you are offering in your institute...',
      date: '27 Dec 2020',
      category: 'Lucknow Public College of Professional Studies...',
      imageUrl: 'image4.png'
    },
    {
      title: 'What is the latest program that you are offering in your institute...',
      date: '27 Dec 2020',
      category: 'Lucknow Public College of Professional Studies...',
      imageUrl: 'image5.png'
    },
    {
      title: 'What is the latest program that you are offering in your institute...',
      date: '27 Dec 2020',
      category: 'Lucknow Public College of Professional Studies...',
      imageUrl: 'image6.png'
    },
    // Add more items here if needed
  ];

  return (
    <aside className="p-2 bg-white rounded shadow min-h-screen">
      <h3 className="text-xl font-bold mb-2 text-[#40347D]">The Big Stories</h3>
      <div className="flex flex-col gap-2">
        {newsItems.map((item, index) => (
          <div key={index} className="w-[410px] h-[170px] bg-gray-100 rounded-lg overflow-hidden flex">
            <img src={item.imageUrl} alt={item.title} className="w-1/3 h-full object-cover rounded-l-lg" />
            <div className="p-4 flex flex-col justify-between">
              <h4 className="text-blue-500 text-sm">{item.title}</h4>
              <div className="flex justify-between items-center">
                <p className="text-gray-600 text-xs">{item.date}</p>
                <p className="text-gray-700 text-xs">{item.category}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </aside>
  );
};

export default SideBar;
