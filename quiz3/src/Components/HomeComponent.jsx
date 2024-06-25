// src/Home.js
import React from 'react';
import { useHistory } from 'react-router-dom';

function Home() {
  const history = useHistory();

  const startQuiz = () => {
    history.push('/quiz');
  };

  return (
    <div className='home'>
      <h1>Welcome to the Quiz App</h1>
      <button onClick={startQuiz}>Play</button>
    </div>
  );
}

export default Home;
