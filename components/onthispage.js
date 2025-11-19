"use client"
import React, { useEffect, useState } from 'react';
import parse from 'html-react-parser';

const OnThisPage = ({ htmlContent }) => {
  const [headings, setHeadings] = useState([]);

  useEffect(() => {
    // Parse the HTML content and extract h2 headings
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = htmlContent;
    const h2Elements = tempDiv.querySelectorAll('h2');
    const h2Data = Array.from(h2Elements).map(h2 => ({
      text: h2.textContent,
      id: h2.id
    }));
    setHeadings(h2Data);
  }, [htmlContent]);

  return (
    <div className="on-this-page fixed top-1/2 right-8 transform -translate-y-1/2 hidden xl:block w-64 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700">
      <h2 className='text-md font-bold mb-3 text-gray-800 dark:text-gray-200'>On This Page</h2>
      <ul className='text-sm space-y-2'>
        {headings.map((heading, index) => (
          <li key={index}>
            <a 
              href={`#${heading.id}`}
              className="text-gray-600 dark:text-gray-400 transition-colors duration-200 block py-1"
              style={{'--hover-color': '#6028ff'}}
              onMouseEnter={(e) => e.target.style.color = '#6028ff'}
              onMouseLeave={(e) => e.target.style.color = ''}
            >
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OnThisPage;