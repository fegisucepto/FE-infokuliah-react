// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Question = () => {
  const [question, setQuestion] = useState('');
  const [choices, setChoices] = useState([]);
  const [remainingTime, setRemainingTime] = useState('');
  const [score, setScore] = useState(null);
  const [questionId, setQuestionId] = useState(null); // Menyimpan ID pertanyaan saat ini

  useEffect(() => {
    fetchQuestion();
  }, []);

  const fetchQuestion = async () => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        console.error('Token not found');
        return;
      }

      const response = await fetch('http://localhost:3002/question', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      const data = await response.json();
      if (data.question && data.question.id) {
        setQuestion(data.question.question);
        setChoices(data.question.choices);
        setQuestionId(data.question.id); // Setelah mendapatkan pertanyaan, set ID

        const intervalId = setInterval(async () => {
          const remainingTimeResponse = await fetch(`http://localhost:3002/question/remaining-time/${data.question.id}`, {
            headers: {
              Authorization: `Bearer ${token}`
            }
          });
          const timeData = await remainingTimeResponse.json();
          setRemainingTime(formatTime(timeData.remainingTime));

          if (timeData.remainingTime === 0) {
            clearInterval(intervalId);
            await calculateScore(data.question.id); // Hitung nilai saat waktu ujian berakhir
          }
        }, 1000);

        return () => clearInterval(intervalId);
      } else {
        console.error('ID not found in question data:', data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleAnswerSelection = async (selectedChoice) => {
    try {
      const token = localStorage.getItem('token');
      if (!token || !questionId) {
        console.error('Token or Question ID not found');
        return;
      }

      await fetch('http://localhost:3002/submit-answer', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({
          questionId: questionId,
          selectedChoice: selectedChoice
        })
      });
    } catch (error) {
      console.error('Failed to save answer:', error);
    }
  };

  const calculateScore = async (questionId) => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        console.error('Token not found');
        return;
      }

      const response = await fetch(`http://localhost:3002/calculate-score/${questionId}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      const scoreData = await response.json();
      setScore(scoreData.score);
    } catch (error) {
      console.error('Failed to fetch score:', error);
    }
  };

  const formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;
    return `${hours}:${minutes}:${remainingSeconds}`;
  };

  return (
    <>
    <Navbar/>
    <div>
      <h1>Ujian Persiapan Masuk Kuliah</h1>
      {question && (
        <div>
          <p>{question}</p>
          <ul>
            {choices.map((choice, index) => (
              <li key={index} onClick={() => handleAnswerSelection(choice)}>
                {choice}
              </li>
            ))}
          </ul>
        </div>
      )}
      <div>
        <h3>Waktu Tersisa:</h3>
        <p>{remainingTime}</p>
      </div>
      {score !== null && (
        <div>
          <h3>Nilai Anda:</h3>
          <p>{score}</p>
        </div>
      )}
    </div>
    <Footer/>
    </>
  );
};

export default Question;
