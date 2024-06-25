import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const questions = [
  {
    questionText: 'What is the capital of Japan?',
    answerOptions: [
      { answerText: 'Seoul', isCorrect: false },
      { answerText: 'Tokyo', isCorrect: true },
      { answerText: 'Beijing', isCorrect: false },
      { answerText: 'Bangkok', isCorrect: false },
    ],
  },
  {
    questionText: 'Which planet is known as the Red Planet?',
    answerOptions: [
      { answerText: 'Earth', isCorrect: false },
      { answerText: 'Mars', isCorrect: true },
      { answerText: 'Jupiter', isCorrect: false },
      { answerText: 'Saturn', isCorrect: false },
    ],
  },
  {
    questionText: 'Who wrote "Hamlet"?',
    answerOptions: [
      { answerText: 'Charles Dickens', isCorrect: false },
      { answerText: 'William Shakespeare', isCorrect: true },
      { answerText: 'Mark Twain', isCorrect: false },
      { answerText: 'Leo Tolstoy', isCorrect: false },
    ],
  },
  {
    questionText: 'What is the smallest prime number?',
    answerOptions: [
      { answerText: '0', isCorrect: false },
      { answerText: '1', isCorrect: false },
      { answerText: '2', isCorrect: true },
      { answerText: '3', isCorrect: false },
    ],
  },
  {
    questionText: 'In which year did the Titanic sink?',
    answerOptions: [
      { answerText: '1912', isCorrect: true },
      { answerText: '1905', isCorrect: false },
      { answerText: '1915', isCorrect: false },
      { answerText: '1918', isCorrect: false },
    ],
  },
  {
    questionText: 'What is the chemical symbol for Gold?',
    answerOptions: [
      { answerText: 'Ag', isCorrect: false },
      { answerText: 'Au', isCorrect: true },
      { answerText: 'Pt', isCorrect: false },
      { answerText: 'Pb', isCorrect: false },
    ],
  },
  {
    questionText: 'How many continents are there?',
    answerOptions: [
      { answerText: '5', isCorrect: false },
      { answerText: '6', isCorrect: false },
      { answerText: '7', isCorrect: true },
      { answerText: '8', isCorrect: false },
    ],
  },
  {
    questionText: 'Who painted the Mona Lisa?',
    answerOptions: [
      { answerText: 'Vincent van Gogh', isCorrect: false },
      { answerText: 'Pablo Picasso', isCorrect: false },
      { answerText: 'Leonardo da Vinci', isCorrect: true },
      { answerText: 'Claude Monet', isCorrect: false },
    ],
  },
];

function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const history = useHistory();

  const handleAnswerButtonClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
      alert('Correct answer!');
    } else {
      alert('Wrong answer!');
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      history.push('/result', { score: score + (isCorrect ? 1 : 0), totalQuestions: questions.length });
    }
  };

  return (
    <div className="app">
      <div className="question-section">
        <div className="question-count">
          <span>Question {currentQuestion + 1}</span>/{questions.length}
        </div>
        <div className="question-text">{questions[currentQuestion].questionText}</div>
      </div>
      <div className="answer-section">
        {questions[currentQuestion].answerOptions.map((answerOption, index) => (
          <button key={index} onClick={() => handleAnswerButtonClick(answerOption.isCorrect)}>
            {answerOption.answerText}
          </button>
        ))}
      </div>
      <button onClick={() => history.push('/result', { score, totalQuestions: questions.length })}>
        Finish
      </button>
    </div>
  );
}

export default Quiz;
