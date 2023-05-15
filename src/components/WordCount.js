import React, { useState } from 'react';
import Histogram from './Histogram';
import './WordCount.css';

const WordCount = ({ textData }) => {
  const [wordCount, setWordCount] = useState({});
  const [showHistogram, setShowHistogram] = useState(false);
  const [showHistogramButton, setShowHistogramButton] = useState(true);

  const countWordOccurrences = () => {
    const words = textData.split(/\s+/);
    const count = {};

    for (let i = 0; i < words.length; i++) {
      const word = words[i];
      count[word] = (count[word] || 0) + 1;
    }

    setWordCount(count);
  };

  const handleShowHistogram = () => {
    setShowHistogram(true);
    setShowHistogramButton(false);
  };

  return (
    <div className="word-count-container">
      {Object.keys(wordCount).length === 0 ? (
        <div>
          <h2>👇 Do next for occurrences</h2>
          <button className="count-button" onClick={countWordOccurrences}>Count Occurrences</button>
        </div>
      ) : (
        <div>
          {showHistogramButton ? (
            <div>
              <h2>Click here to Check the 20 most occurring words on histogram 👇</h2>
              <button className="histogram-button" onClick={handleShowHistogram}>Show Histogram 📊</button>
            </div>
          ) : (
            <>
              {showHistogram && <Histogram wordCount={wordCount} />}
            </>
          )}
          <h3>Occurrences of Word in Fetched Data:</h3>
          <ul>
            {Object.entries(wordCount).map(([word, count]) => (
              <li key={word}>
                {word}: {count}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default WordCount;
