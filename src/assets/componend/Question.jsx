// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from './Navbar';
import Footer from './Footer';

const QuestionViewer = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedChoice, setSelectedChoice] = useState('');
  const [questionId, setQuestionId] = useState('');
  const [examFinished, setExamFinished] = useState(false);
  const [userScore, setUserScore] = useState(null);
  const [timeLeft, setTimeLeft] = useState(900); // 15 menit = 900 detik
  const [timerRunning, setTimerRunning] = useState(true);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          console.error('Token not found');
          return;
        }

        const config = {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };

        const response = await axios.get('http://localhost:3002/question', config);
        setQuestions(response.data.questions);
        if (response.data.questions.length > 0) {
          setQuestionId(response.data.questions[0].id);
        }
      } catch (error) {
        console.error('Error fetching questions:', error);
      }
    };

    fetchQuestions();
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (timerRunning && timeLeft > 0) {
        setTimeLeft(timeLeft - 1);
      } else {
        setTimerRunning(false);
        if (!examFinished) {
          setExamFinished(true);
          showUserScore();
        }
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft, timerRunning, examFinished]);

  const handleAnswerSelection = (choice) => {
    setSelectedChoice(choice);
  };

  const moveToNextQuestion = async () => {
    setCurrentQuestionIndex(currentQuestionIndex + 1);
    setSelectedChoice('');
    if (currentQuestionIndex < questions.length - 1) {
      setQuestionId(questions[currentQuestionIndex + 1].id);
      await submitAnswer(selectedChoice, questionId);
    } else {
      setExamFinished(true);
      await submitAnswer(selectedChoice, questionId);
      showUserScore();
    }
  };

  const moveToPreviousQuestion = () => {
    setCurrentQuestionIndex(currentQuestionIndex - 1);
    setSelectedChoice('');
    if (currentQuestionIndex > 0) {
      setQuestionId(questions[currentQuestionIndex - 1].id);
    }
  };

  const submitAnswer = async (selectedChoice, questionId) => {
    try {
      const token = localStorage.getItem('token');
      if (!token || !questionId || !selectedChoice) {
        console.error('Token, Question ID, or Selected Choice not found');
        return;
      }

      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      };

      await axios.post('http://localhost:3002/submit-answer', { questionId, selectedChoice }, config);
    } catch (error) {
      console.error('Failed to submit answer:', error);
    }
  };

  const showUserScore = async () => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        console.error('Token not found');
        return;
      }

      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      const response = await axios.get('http://localhost:3002/show-score', config);
      if (response.data.userScore) {
        setUserScore(response.data.userScore.score);
      } else {
        console.error('User score not found in response:', response.data);
      }
    } catch (error) {
      console.error('Failed to fetch user score:', error);
    }
  };

  return (
    <>
      <Navbar />
      <div>
        {questions.length > 0 && currentQuestionIndex < questions.length && (
          <div>
            <p>{questions[currentQuestionIndex].question}</p>
            <ul>
              {questions[currentQuestionIndex].choices.map((choice, index) => (
                <li
                  key={index}
                  onClick={() => handleAnswerSelection(choice)}
                  style={{
                    cursor: 'pointer',
                    listStyleType: 'none',
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  <input type="checkbox" checked={choice === selectedChoice} readOnly style={{ marginRight: '5px' }} />
                  {choice}
                </li>
              ))}
            </ul>
            <button onClick={moveToPreviousQuestion} disabled={currentQuestionIndex === 0}>
              Previous
            </button>
            <button onClick={moveToNextQuestion} disabled={examFinished}>
              {currentQuestionIndex === questions.length - 1 ? 'Finish' : 'Next'}
            </button>
          </div>
        )}
        {examFinished && (
          <div>
            <h3>Nilai:</h3>
            <p>{userScore}</p>
          </div>
        )}
        <div>
          <p>
            Waktu Tersisa: {Math.floor(timeLeft / 60)}:{(timeLeft % 60).toString().padStart(2, '0')}
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default QuestionViewer;
