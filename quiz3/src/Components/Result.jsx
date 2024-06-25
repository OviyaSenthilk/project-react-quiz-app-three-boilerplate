// src/Result.js
import React from 'react';
import { useLocation } from 'react-router-dom';

function Result() {
  const location = useLocation();
  const { score, totalQuestions } = location.state;

  return (
    <div className='result'>
      <h1>Quiz Result</h1>
      <p>You scored {score} out of {totalQuestions}</p>
    </div>
  );
}

export default Result;
