import React, { useEffect, useState } from 'react';
import axios from 'axios';

import WordCount from './WordCount';
import './Main.css';

function Content() {
  const [textData, setTextData] = useState(null);

  useEffect(() => {
    axios.get('https://www.terriblytinytales.com/test.txt')
      .then(response => setTextData(response.data))
      .catch(error => console.error(error));
  }, []);

  const breakTextData = (data) => {
    const sections = data.split(/\n(?=\d+\.\s+)/);
    return sections.map((section) => section.trim());
  };

  return (
    <div className='main-container'>
      <WordCount textData={textData} />
      <h2>Data from Terribly Tiny Tales</h2>
      <div className='section-container'>
        {textData && breakTextData(textData).map((section, index) => (
          <div className='section-card' key={index}>
            <div className='section-header'>
              <span>{section.match(/\d+\.\s+(.*)/)[1]}</span>
            </div>
            <div className='section-body'>
              {section.split('\n').map((line, index) => (
                <p className='text' key={index}>{line}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Content;
