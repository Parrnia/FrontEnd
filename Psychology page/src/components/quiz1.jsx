import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import styles from './quiz1.module.css';

const questions = [
  {
    "_id": "139794247725",
    "answer_texts": {
      "زن": "1",
      "مرد": "1"
    },
    "exam_id": "1",
    "question_id": "1",
    "question_text": "جنسیت"
  },
  {
    "_id": "17039306246",
    "answer_texts": {
      "20 تا 30 سال": "1",
      "30 تا 40 سال": "1",
      "40 تا 50 سال": "1",
      "بيشتر از 50 سال": "1"
    },
    "exam_id": "1",
    "question_id": "2",
    "question_text": "وضعیت تاهل"
  },
  {
    "_id": "11514676011",
    "answer_texts": {
      "20ديپلم و فوق ديپلم": "1",
      "دکتري": "1",
      "فوق ليسانس": "1",
      "ليسانس": "1"
    },
    "exam_id": "1",
    "question_id": "3",
    "question_text": " تحصیلات"
  },
  {
    "_id": "123456789",
    "answer_texts": {
      "کمتر از 5 سال": "1",
      "5 تا 10 سال": "1",
      "10 تا 15 سال": "1",
      "بيشتر از 15 سال": "1"
    },
    "exam_id": "1",
    "question_id": "4",
    "question_text": "سابقه کار"
  },
  {
    "_id": "987654321",
    "answer_texts": {
      "کارمند": "1",
      "مدیر": "1",
      "مشاور": "1",
      "سرپرست": "1"
    },
    "exam_id": "1",
    "question_id": "5",
    "question_text": "موقعیت شغلی"
  }
];

const Quiz1 = () => {
  const navigate = useNavigate();
  const [selectedAnswers, setSelectedAnswers] = useState(Array(5).fill(null));
  const [showResult, setShowResult] = useState(false);
  const [result, setResult] = useState({
    score: 0,
    correctAnswers: 0,
    wrongAnswers: 0,
  });

  const onAnswerSelected = (questionIndex, choiceId) => {
    setSelectedAnswers((prevAnswers) => {
      const updatedAnswers = [...prevAnswers];
      updatedAnswers[questionIndex] = choiceId;
      return updatedAnswers;
    });
  };

  const onClickFinish = () => {
    let score = 0;
    let correctAnswers = 0;
    let wrongAnswers = 0;

    selectedAnswers.forEach((answerId, index) => {
      if (answerId !== null) {
        const selectedChoice = questions[index].answer_texts[Object.keys(questions[index].answer_texts)[answerId]];
        score += parseInt(selectedChoice);
        correctAnswers += 1;
      } else {
        wrongAnswers += 1;
      }
    });

    setResult({
      score,
      correctAnswers,
      wrongAnswers,
    });

    setShowResult(true);
    navigate('/quiz');
  };

  const addLeadingZero = (number) => (number > 9 ? number : `0${number}`);

  const areAllQuestionsAnswered = selectedAnswers.every((answer) => answer !== null);

  return (
    <div className={styles.root}>
      <div className={styles['quiz-container']}>
        {!showResult ? (
          <div>
            {questions.map((question, index) => (
              <div key={question._id}>
                <div>
                  <span className={styles['active-question-no']}>
                    {addLeadingZero(index + 1)}
                  </span>
                  <span className={styles['total-question']}>
                    /{addLeadingZero(questions.length)}
                  </span>
                </div>
                <h2>{question.question_text}</h2>
                <ul>
                  {Object.entries(question.answer_texts).map(([answer, score], choiceIndex) => (
                    <li
                      onClick={() => onAnswerSelected(index, choiceIndex)}
                      key={choiceIndex}
                      className={`${styles['answer-item']} ${
                        selectedAnswers[index] === choiceIndex ? styles['selected-answer'] : ''
                      }`}
                    >
                      {answer}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div className={styles['flex-right']}>
              <button
                className={`${styles['flex-button']} ${styles['finish-button']} ${
                  areAllQuestionsAnswered
                    ? styles['enabled-button']
                    : styles['disabled-button']
                }`}
                onClick={areAllQuestionsAnswered ? onClickFinish : null}
              >
                اتمام 
              </button>
            </div>
          </div>
        ) : (
          <div className={styles.result}>
          
          </div>
        )}
      </div>
    </div>
  );
};

export default Quiz1;