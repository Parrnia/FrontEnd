import { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import styles from './quiz.module.css';
import { questions } from './QuestionBank';

const Quiz = () => {
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [selectedAnswerId, setSelectedAnswerId] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [result, setResult] = useState({
    score: 0,
    correctAnswers: 0,
    wrongAnswers: 0,
  });

  const { question_text, answer_texts, _id: questionId } = questions[activeQuestion];
  const choices = Object.entries(answer_texts).map(([answer, score], index) => ({
    id: index,
    text: answer,
    score: parseInt(score),
  }));

  const onClickNext = async () => {
    if (selectedAnswerId !== null) {
      const selectedChoice = choices.find((choice) => choice.id === selectedAnswerId);
      setResult((prev) => ({
        ...prev,
        score: prev.score + selectedChoice.score,
        correctAnswers: prev.correctAnswers + 1,
      }));

      // try {
      //   await axios.post('/api/quiz-results', {
      //     questionId,
      //     score: selectedChoice.score,
      //   });
      // } catch (error) {
      //   console.error('Error sending quiz results:', error);
      // }
    } else {
      setResult((prev) => ({
        ...prev,
        wrongAnswers: prev.wrongAnswers + 1,
      }));
    }

    if (activeQuestion !== questions.length - 1) {
      setActiveQuestion((prev) => prev + 1);
    } else {
      setActiveQuestion(0);
      setShowResult(true);
    }
    setSelectedAnswerId(null);
  };

  const onClickPrevious = () => {
    if (activeQuestion !== 0) {
      setActiveQuestion((prev) => prev - 1);
    }
  };

  const onAnswerSelected = (choiceId) => {
    setSelectedAnswerId(choiceId);
  };

  const addLeadingZero = (number) => (number > 9 ? number : `0${number}`);

  return (
    <div className={styles.root}>
      <div className={styles['quiz-container']}>
        {!showResult ? (
          <div>
            <div>
              <span className={styles['active-question-no']}>
                {addLeadingZero(activeQuestion + 1)}
              </span>
              <span className={styles['total-question']}>
                /{addLeadingZero(questions.length)}
              </span>
            </div>
            <h2>{question_text}</h2>
            <ul>
              {choices.map((choice) => (
                <li
                  onClick={() => onAnswerSelected(choice.id)}
                  key={choice.id}
                  className={`${styles['answer-item']} ${
                    selectedAnswerId === choice.id ? styles['selected-answer'] : ''
                  }`}
                >
                  {choice.text}
                </li>
              ))}
            </ul>
          
            <div className={styles['flex-buttons']}>
          
              <button onClick={onClickNext} disabled={selectedAnswerId === null}>
                {activeQuestion === questions.length - 1 ? 'اتمام' : 'بعدی '}
              </button>
              <button  onClick={onClickPrevious} disabled={activeQuestion === 0} className={styles['buttons-left']} >
                قبلی
              </button>
            </div>
          </div>
        ) : (
          <div className={styles.result}>
            <h3>Result</h3>
            <p>
              Total Question: <span>{questions.length}</span>
            </p>
            <p>
              Total Score:<span> {result.score}</span>
            </p>
            <p>
              Correct Answers:<span> {result.correctAnswers}</span>
            </p>
            <p>
              Wrong Answers:<span> {result.wrongAnswers}</span>
            </p>
            <Link to="/" className={styles['flex-button']} role="button">
              بازگشت به صفحه اصلی
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Quiz;