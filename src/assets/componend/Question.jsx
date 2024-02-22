// // eslint-disable-next-line no-unused-vars
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import Navbar from './Navbar';
// import Footer from './Footer';
// import '../css/question.css';

// const QuestionViewer = () => {
//   const [questions, setQuestions] = useState([]);
//   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
//   const [selectedChoice, setSelectedChoice] = useState('');
//   const [questionId, setQuestionId] = useState('');
//   const [examFinished, setExamFinished] = useState(false);
//   const [userScore, setUserScore] = useState(null);
//   const [timeLeft, setTimeLeft] = useState(90); // 15 menit = 900 detik
//   const [timerRunning, setTimerRunning] = useState(true);
//   const [answerMap, setAnswerMap] = useState({}); // Map untuk menyimpan jawaban

//   useEffect(() => {
//     const fetchQuestions = async () => {
//       try {
//         const token = localStorage.getItem('token');
//         if (!token) {
//           console.error('Token not found');
//           return;
//         }

//         const config = {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         };

//         const response = await axios.get('http://localhost:3002/question', config);
//         setQuestions(response.data.questions);
//         if (response.data.questions.length > 0) {
//           setQuestionId(response.data.questions[0].id);
//         }
//       } catch (error) {
//         console.error('Error fetching questions:', error);
//       }
//     };

//     fetchQuestions();
//   }, []);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       if (timerRunning && timeLeft > 0) {
//         setTimeLeft(timeLeft - 1);
//       } else {
//         setTimerRunning(false);
//         if (!examFinished) {
//           setExamFinished(true);
//           showUserScore();
//         }
//       }
//     }, 1000);

//     return () => clearTimeout(timer);
//   }, [timeLeft, timerRunning, examFinished]);

//   const handleAnswerSelection = (choice) => {
//     setSelectedChoice(choice);
//   };

//   const moveToNextQuestion = async () => {
//     if (currentQuestionIndex < questions.length - 1) {
//       const updatedIndex = currentQuestionIndex + 1;
//       const nextQuestionId = questions[updatedIndex].id;
//       await submitAnswer(selectedChoice, questionId); // Submit jawaban sebelum pindah
//       setQuestionId(nextQuestionId);
//       setCurrentQuestionIndex(updatedIndex);
//       const savedAnswer = answerMap[nextQuestionId];
//       if (savedAnswer) {
//         setSelectedChoice(savedAnswer);
//       } else {
//         setSelectedChoice('');
//       }
//     } else {
//       await submitAnswer(selectedChoice, questionId); // Submit jawaban sebelum menyelesaikan
//       setExamFinished(true);
//       showUserScore();
//     }
//   };

//   // const moveToPreviousQuestion = () => {
//   //   if (currentQuestionIndex > 0) {
//   //     const updatedIndex = currentQuestionIndex - 1;
//   //     const previousQuestionId = questions[updatedIndex].id;
//   //     const previousAnswer = answerMap[questionId]; // Jawaban saat ini
//   //     if (previousAnswer) {
//   //       const updatedAnswerMap = { ...answerMap, [questionId]: selectedChoice }; // Menyimpan jawaban sebelum pindah
//   //       setAnswerMap(updatedAnswerMap);
//   //     }
//   //     setQuestionId(previousQuestionId);
//   //     setCurrentQuestionIndex(updatedIndex);
//   //     const savedAnswer = answerMap[previousQuestionId]; // Mencari jawaban yang sudah disimpan
//   //     if (savedAnswer) {
//   //       setSelectedChoice(savedAnswer);
//   //     } else {
//   //       setSelectedChoice('');
//   //     }
//   //   }
//   // };
//   const moveToPreviousQuestion = async () => {
//     if (currentQuestionIndex > 0) {
//       const updatedIndex = currentQuestionIndex - 1;
//       const previousQuestionId = questions[updatedIndex].id;
//       const previousAnswer = answerMap[previousQuestionId]; // Jawaban sebelumnya
//       const newAnswer = selectedChoice; // Jawaban yang baru dipilih
//       setCurrentQuestionIndex(updatedIndex);
//       setQuestionId(previousQuestionId);
//       const savedAnswer = answerMap[previousQuestionId];
//       if (savedAnswer) {
//         setSelectedChoice(savedAnswer);
//       } else {
//         setSelectedChoice('');
//       }

//       // Lakukan pemanggilan API untuk memperbarui jawaban dan skor
//       if (
//         (previousAnswer && previousAnswer !== newAnswer) || // Jawaban sebelumnya salah, jawaban baru benar
//         (!previousAnswer && newAnswer) // Jawaban sebelumnya kosong (belum dijawab), jawaban baru salah
//       ) {
//         try {
//           const token = localStorage.getItem('token');
//           if (!token || !previousQuestionId) {
//             console.error('Token or Question ID not found');
//             return;
//           }

//           const config = {
//             headers: {
//               Authorization: `Bearer ${token}`,
//             },
//           };

//           await axios.post('http://localhost:3002/update-answer', {
//             questionId: previousQuestionId,
//             selectedChoice: newAnswer, // Jawaban yang baru dipilih
//           }, config);

//           // Setelah pembaruan jawaban di BE, perbarui nilai skor pengguna di FE
//           showUserScore();
//         } catch (error) {
//           console.error('Failed to update answer:', error);
//         }
//       }
//     }
//   };

//   const submitAnswer = async () => {
//     try {
//       const token = localStorage.getItem('token');
//       if (!token || !questionId || !selectedChoice) {
//         console.error('Token, Question ID, or Selected Choice not found');
//         return;
//       }

//       const config = {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       };

//       const response = await axios.post('http://localhost:3002/submit-answer', { questionId, selectedChoice }, config);

//       if (response.status === 200) {
//         // Update user score success
//         const updatedAnswerMap = { ...answerMap, [questionId]: selectedChoice };
//         setAnswerMap(updatedAnswerMap);
//         showUserScore();
//       }
//     } catch (error) {
//       console.error('Failed to submit answer:', error);
//     }
//   };

//   const showUserScore = async () => {
//     try {
//       const token = localStorage.getItem('token');
//       if (!token) {
//         console.error('Token not found');
//         return;
//       }

//       const config = {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       };

//       const response = await axios.get('http://localhost:3002/show-score', config);
//       if (response.data.userScore) {
//         setUserScore(response.data.userScore.score);
//       } else {
//         console.error('User score not found in response:', response.data);
//       }
//     } catch (error) {
//       console.error('Failed to fetch user score:', error);
//     }
//   };

//   return (
//     <>
//       <Navbar />
//       <div className="question-container">
//         {(!examFinished && questions.length > 0 && currentQuestionIndex < questions.length) && (
//           <div>
//             <p>{questions[currentQuestionIndex].question}</p>
//             <ul>
//               {questions[currentQuestionIndex].choices.map((choice, index) => (
//                 <li key={index} onClick={() => handleAnswerSelection(choice)} className="choice">
//                   <input type="checkbox" checked={choice === selectedChoice} readOnly className="checkbox" />
//                   {choice}
//                 </li>
//               ))}
//             </ul>
//             <button onClick={moveToPreviousQuestion} disabled={currentQuestionIndex === 0}>
//               Previous
//             </button>
//             <button onClick={moveToNextQuestion} disabled={examFinished}>
//               {currentQuestionIndex === questions.length - 1 ? 'Finish' : 'Next'}
//             </button>
//           </div>
//         )}
//         {(examFinished || timeLeft <= 0) && (
//           <div className="result">
//             <h3>Nilai:</h3>
//             <p>{userScore}</p>
//           </div>
//         )}
//         {(timeLeft <= 0 && !examFinished) && (
//           <div className="result">
//             <h3>Waktu Habis</h3>
//             <p>Nilai tidak tersedia</p>
//           </div>
//         )}
//         {(timeLeft > 0 && !examFinished) && (
//           <div className="timer top-right">
//             <p>
//               Waktu Tersisa: {Math.floor(timeLeft / 60)}:{(timeLeft % 60).toString().padStart(2, '0')}
//             </p>
//           </div>
//         )}
//       </div>
//       <Footer />
//     </>
//   );
// };

// export default QuestionViewer;

// // // eslint-disable-next-line no-unused-vars
// // import React, { useEffect, useState } from 'react';
// // import axios from 'axios';
// // import Navbar from './Navbar';
// // import Footer from './Footer';
// // import '../css/question.css';

// // const QuestionViewer = () => {
// //   const [questions, setQuestions] = useState([]);
// //   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
// //   const [selectedChoice, setSelectedChoice] = useState('');
// //   const [questionId, setQuestionId] = useState('');
// //   const [examFinished, setExamFinished] = useState(false);
// //   const [userScore, setUserScore] = useState(null);
// //   const [timeLeft, setTimeLeft] = useState(90); // 15 menit = 900 detik
// //   const [timerRunning, setTimerRunning] = useState(true);
// //   const [answerMap, setAnswerMap] = useState({}); // Map untuk menyimpan jawaban di frontend

// //   useEffect(() => {
// //     const fetchQuestions = async () => {
// //       try {
// //         const token = localStorage.getItem('token');
// //         if (!token) {
// //           console.error('Token not found');
// //           return;
// //         }

// //         const config = {
// //           headers: {
// //             Authorization: `Bearer ${token}`,
// //           },
// //         };

// //         const response = await axios.get('http://localhost:3002/question', config);
// //         setQuestions(response.data.questions);
// //         if (response.data.questions.length > 0) {
// //           setQuestionId(response.data.questions[0].id);
// //         }
// //       } catch (error) {
// //         console.error('Error fetching questions:', error);
// //       }
// //     };

// //     fetchQuestions();
// //   }, []);

// //   useEffect(() => {
// //     const timer = setTimeout(() => {
// //       if (timerRunning && timeLeft > 0) {
// //         setTimeLeft(timeLeft - 1);
// //         // Simpan jawaban di state lokal setiap detik
// //         const updatedAnswerMap = { ...answerMap, [questionId]: selectedChoice };
// //         setAnswerMap(updatedAnswerMap);
// //       } else {
// //         setTimerRunning(false);
// //         if (!examFinished) {
// //           setExamFinished(true);
// //           showUserScore();
// //         }
// //       }
// //     }, 1000);

// //     return () => clearTimeout(timer);
// //   }, [timeLeft, timerRunning, examFinished, selectedChoice, questionId, answerMap]);

// //   const handleAnswerSelection = (choice) => {
// //     setSelectedChoice(choice);
// //   };

// //   const moveToNextQuestion = () => {
// //     // Pindah ke pertanyaan berikutnya dan simpan jawaban di state lokal
// //     if (currentQuestionIndex < questions.length - 1) {
// //       const updatedIndex = currentQuestionIndex + 1;
// //       const nextQuestionId = questions[updatedIndex].id;
// //       setQuestionId(nextQuestionId);
// //       setCurrentQuestionIndex(updatedIndex);
// //       const savedAnswer = answerMap[nextQuestionId];
// //       if (savedAnswer) {
// //         setSelectedChoice(savedAnswer);
// //       } else {
// //         setSelectedChoice('');
// //       }
// //     } else {
// //       setExamFinished(true);
// //       showUserScore();
// //     }
// //   };

// //   const moveToPreviousQuestion = () => {
// //     // Pindah ke pertanyaan sebelumnya tanpa menyimpan jawaban di state lokal
// //     if (currentQuestionIndex > 0) {
// //       const updatedIndex = currentQuestionIndex - 1;
// //       const previousQuestionId = questions[updatedIndex].id;
// //       setQuestionId(previousQuestionId);
// //       setCurrentQuestionIndex(updatedIndex);
// //       const previousAnswer = answerMap[previousQuestionId];
// //       if (previousAnswer) {
// //         setSelectedChoice(previousAnswer);
// //       } else {
// //         // Jika jawaban sebelumnya tidak tersedia, set ke nilai awal
// //         setSelectedChoice('');
// //       }
// //     }
// //   };

// //   const submitAnswersToBackend = async () => {
// //     // Kirim jawaban ke backend
// //     try {
// //       const token = localStorage.getItem('token');
// //       if (!token) {
// //         console.error('Token not found');
// //         return;
// //       }

// //       const config = {
// //         headers: {
// //           Authorization: `Bearer ${token}`,
// //         },
// //       };

// //       const answersToSend = Object.entries(answerMap).map(([qId, choice]) => ({
// //         questionId: parseInt(qId),
// //         selectedChoice: choice,
// //       }));

// //       const response = await axios.post('http://localhost:3002/submit-answers', { answers: answersToSend }, config);

// //       if (response.status === 200) {
// //         // Update user score success
// //         showUserScore();
// //       }
// //     } catch (error) {
// //       console.error('Failed to submit answers:', error);
// //     }
// //   };

// //   const showUserScore = async () => {
// //     try {
// //       const token = localStorage.getItem('token');
// //       if (!token) {
// //         console.error('Token not found');
// //         return;
// //       }

// //       const config = {
// //         headers: {
// //           Authorization: `Bearer ${token}`,
// //         },
// //       };

// //       const response = await axios.get('http://localhost:3002/show-score', config);
// //       if (response.data.userScore) {
// //         setUserScore(response.data.userScore.score);
// //       } else {
// //         console.error('User score not found in response:', response.data);
// //       }
// //     } catch (error) {
// //       console.error('Failed to fetch user score:', error);
// //     }
// //   };

// //   return (
// //     <>
// //       <Navbar />
// //       <div className="question-container">
// //         {(!examFinished && questions.length > 0 && currentQuestionIndex < questions.length) && (
// //           <div>
// //             <p>{questions[currentQuestionIndex].question}</p>
// //             <ul>
// //               {questions[currentQuestionIndex].choices.map((choice, index) => (
// //                 <li key={index} onClick={() => handleAnswerSelection(choice)} className="choice">
// //                   <input type="checkbox" checked={choice === selectedChoice} readOnly className="checkbox" />
// //                   {choice}
// //                 </li>
// //               ))}
// //             </ul>
// //             <button onClick={moveToPreviousQuestion} disabled={currentQuestionIndex === 0}>
// //               Previous
// //             </button>
// //             <button onClick={moveToNextQuestion} disabled={examFinished}>
// //               {currentQuestionIndex === questions.length - 1 ? 'Finish' : 'Next'}
// //             </button>
// //           </div>
// //         )}
// //         {(examFinished || timeLeft <= 0) && (
// //           <div className="result">
// //             <h3>Nilai:</h3>
// //             <p>{userScore}</p>
// //             {(!examFinished && timeLeft > 0) && (
// //               <button onClick={submitAnswersToBackend}>
// //                 Submit Answers
// //               </button>
// //             )}
// //           </div>
// //         )}
// //         {(timeLeft <= 0 && !examFinished) && (
// //           <div className="result">
// //             <h3>Waktu Habis</h3>
// //             <p>Nilai tidak tersedia</p>
// //           </div>
// //         )}
// //         {(timeLeft > 0 && !examFinished) && (
// //           <div className="timer top-right">
// //             <p>
// //               Waktu Tersisa: {Math.floor(timeLeft / 60)}:{(timeLeft % 60).toString().padStart(2, '0')}
// //             </p>
// //           </div>
// //         )}
// //       </div>
// //       <Footer />
// //     </>
// //   );
// // };

// // export default QuestionViewer;

// // eslint-disable-next-line no-unused-vars
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import Navbar from './Navbar';
// import Footer from './Footer';
// import '../css/question.css';

// const QuestionViewer = () => {
//   const [questions, setQuestions] = useState([]);
//   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
//   const [selectedChoice, setSelectedChoice] = useState('');
//   const [questionId, setQuestionId] = useState('');
//   const [examFinished, setExamFinished] = useState(false);
//   const [userScore, setUserScore] = useState(null);
//   const [timeLeft, setTimeLeft] = useState(90); // 15 menit = 900 detik
//   const [timerRunning, setTimerRunning] = useState(true);
//   const [answerMap, setAnswerMap] = useState({}); // Map untuk menyimpan jawaban
//   const [userAnswers, setUserAnswers] = useState([]); // Array untuk menyimpan semua jawaban pengguna

//   useEffect(() => {
//     const fetchQuestions = async () => {
//       try {
//         const token = localStorage.getItem('token');
//         if (!token) {
//           console.error('Token not found');
//           return;
//         }

//         const config = {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         };

//         const response = await axios.get('http://localhost:3002/question', config);
//         setQuestions(response.data.questions);
//         if (response.data.questions.length > 0) {
//           setQuestionId(response.data.questions[0].id);
//         }
//       } catch (error) {
//         console.error('Error fetching questions:', error);
//       }
//     };

//     fetchQuestions();
//   }, []);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       if (timerRunning && timeLeft > 0) {
//         setTimeLeft(timeLeft - 1);
//       } else {
//         setTimerRunning(false);
//         if (!examFinished) {
//           setExamFinished(true);
//           showUserScore();
//           submitAllAnswers(); // Submit all answers when the timer runs out
//         }
//       }
//     }, 1000);

//     return () => clearTimeout(timer);
//   }, [timeLeft, timerRunning, examFinished]);

//   const handleAnswerSelection = (choice) => {
//     const updatedAnswers = [...userAnswers];
//     const answerIndex = updatedAnswers.findIndex((answer) => answer.questionId === questionId);

//     if (answerIndex !== -1) {
//       updatedAnswers[answerIndex].selectedChoice = choice;
//     } else {
//       updatedAnswers.push({
//         questionId: questionId,
//         selectedChoice: choice,
//       });
//     }

//     setUserAnswers(updatedAnswers);
//     setSelectedChoice(choice);
//   };

//   const moveToNextQuestion = async () => {
//     if (currentQuestionIndex < questions.length - 1) {
//       const updatedIndex = currentQuestionIndex + 1;
//       const nextQuestionId = questions[updatedIndex].id;
//       setQuestionId(nextQuestionId);
//       setCurrentQuestionIndex(updatedIndex);
//       const savedAnswer = answerMap[nextQuestionId];
//       if (savedAnswer) {
//         setSelectedChoice(savedAnswer);
//       } else {
//         setSelectedChoice('');
//       }
//     } else {
//       await submitAllAnswers();
//       setExamFinished(true);
//       showUserScore();
//     }
//   };

//   const moveToPreviousQuestion = async () => {
//     if (currentQuestionIndex > 0) {
//       const updatedIndex = currentQuestionIndex - 1;
//       const previousQuestionId = questions[updatedIndex].id;
//       const previousAnswer = answerMap[previousQuestionId];
//       setCurrentQuestionIndex(updatedIndex);
//       setQuestionId(previousQuestionId);
//       const savedAnswer = answerMap[previousQuestionId];
//       if (savedAnswer) {
//         setSelectedChoice(savedAnswer);
//       } else {
//         setSelectedChoice('');
//       }

//       if (
//         (previousAnswer && previousAnswer !== selectedChoice) ||
//         (!previousAnswer && selectedChoice)
//       ) {
//         try {
//           const token = localStorage.getItem('token');
//           if (!token || !previousQuestionId) {
//             console.error('Token or Question ID not found');
//             return;
//           }

//           const config = {
//             headers: {
//               Authorization: `Bearer ${token}`,
//             },
//           };

//           await axios.post('http://localhost:3002/update-answer', {
//             questionId: previousQuestionId,
//             selectedChoice: selectedChoice,
//           }, config);

//           showUserScore();
//         } catch (error) {
//           console.error('Failed to update answer:', error);
//         }
//       }
//     }
//   };

//   const submitAnswer = async () => {
//     try {
//       const token = localStorage.getItem('token');
//       if (!token || !questionId || !selectedChoice) {
//         console.error('Token, Question ID, or Selected Choice not found');
//         return;
//       }

//       const config = {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       };

//       const response = await axios.post('http://localhost:3002/submit-answer', { questionId, selectedChoice }, config);

//       if (response.status === 200) {
//         const updatedAnswerMap = { ...answerMap, [questionId]: selectedChoice };
//         setAnswerMap(updatedAnswerMap);
//         showUserScore();
//       }
//     } catch (error) {
//       console.error('Failed to submit answer:', error);
//     }
//   };

//   const showUserScore = async () => {
//     try {
//       const token = localStorage.getItem('token');
//       if (!token) {
//         console.error('Token not found');
//         return;
//       }

//       const config = {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       };
//       console.log('Fetching user score from:', 'http://localhost:3002/show-score');
//       const response = await axios.get('http://localhost:3002/show-score', config);
//       if (response.data.userScore) {
//         setUserScore(response.data.userScore.score);
//       } else {
//         console.error('User score not found in response:', response.data);
//       }
//     } catch (error) {
//       console.error('Failed to fetch user score:', error);
//     }
//   };

//   const submitAllAnswers = async () => {
//     try {
//       const token = localStorage.getItem('token');
//       if (!token) {
//         console.error('Token not found');
//         return;
//       }

//       const config = {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       };

//       await axios.post('http://localhost:3002/submit-answer', { answers: userAnswers }, config);
//     } catch (error) {
//       console.error('Failed to submit all answers:', error);
//     }
//   };

//   return (
//     <>
//       <Navbar />
//       <div className="question-container">
//         {(!examFinished && questions.length > 0 && currentQuestionIndex < questions.length) && (
//           <div>
//             <p>{questions[currentQuestionIndex].question}</p>
//             <ul>
//               {questions[currentQuestionIndex].choices.map((choice, index) => (
//                 <li key={index} onClick={() => handleAnswerSelection(choice)} className="choice">
//                   <input type="checkbox" checked={choice === selectedChoice} readOnly className="checkbox" />
//                   {choice}
//                 </li>
//               ))}
//             </ul>
//             <button onClick={moveToPreviousQuestion} disabled={currentQuestionIndex === 0}>
//               Previous
//             </button>
//             <button onClick={moveToNextQuestion} disabled={examFinished}>
//               {currentQuestionIndex === questions.length - 1 ? 'Finish' : 'Next'}
//             </button>
//           </div>
//         )}
//         {(examFinished || timeLeft <= 0) && (
//           <div className="result">
//             <h3>Nilai:</h3>
//             <p>{userScore}</p>
//           </div>
//         )}
//         {(timeLeft <= 0 && !examFinished) && (
//           <div className="result">
//             <h3>Waktu Habis</h3>
//             <p>Nilai tidak tersedia</p>
//           </div>
//         )}
//         {(timeLeft > 0 && !examFinished) && (
//           <div className="timer top-right">
//             <p>
//               Waktu Tersisa: {Math.floor(timeLeft / 60)}:{(timeLeft % 60).toString().padStart(2, '0')}
//             </p>
//           </div>
//         )}
//       </div>
//       <Footer />
//     </>
//   );
// };

// export default QuestionViewer;

// SEMPURNA TETAPII CENTANG BLM
// // eslint-disable-next-line no-unused-vars
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import Navbar from './Navbar';
// import Footer from './Footer';
// import '../css/question.css';
// import { useNavigate } from 'react-router-dom';

// const QuestionViewer = () => {
//   const [questions, setQuestions] = useState([]);
//   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
//   const [selectedChoice, setSelectedChoice] = useState('');
//   const [questionId, setQuestionId] = useState('');
//   const [examFinished, setExamFinished] = useState(false);
//   const [userScore, setUserScore] = useState(null);
//   const [timeLeft, setTimeLeft] = useState(90); // 15 menit = 900 detik
//   const [timerRunning, setTimerRunning] = useState(true);
//   const [answerMap, setAnswerMap] = useState({}); // Map untuk menyimpan jawaban
//   const [answers, setAnswers] = useState([]); // State untuk menyimpan jawaban dalam format yang diinginkan

//   useEffect(() => {
//     const fetchQuestions = async () => {
//       try {
//         const token = localStorage.getItem('token');
//         if (!token) {
//           console.error('Token not found');
//           return;
//         }

//         const config = {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         };

//         const response = await axios.get('http://localhost:3002/question', config);
//         setQuestions(response.data.questions);
//         if (response.data.questions.length > 0) {
//           setQuestionId(response.data.questions[0].id);
//         }
//       } catch (error) {
//         console.error('Error fetching questions:', error);
//       }
//     };

//     fetchQuestions();
//   }, []);

//   useEffect(() => {
//     const timer = setTimeout(async () => {
//       if (timerRunning && timeLeft > 0) {
//         setTimeLeft(timeLeft - 1);
//       } else {
//         setTimerRunning(false);
//         if (!examFinished) {
//           setExamFinished(true);
//           await submitAnswer(); // Pemanggilan submitAnswer saat waktu habis
//           showUserScore();
//         }
//       }
//     }, 1000);

//     return () => clearTimeout(timer);
//   }, [timeLeft, timerRunning, examFinished]);

//   const handleAnswerSelection = (choice) => {
//     setSelectedChoice(choice);
//   };

//   const moveToPreviousQuestion = () => {
//     if (currentQuestionIndex > 0) {
//       const updatedIndex = currentQuestionIndex - 1;
//       const previousQuestionId = questions[updatedIndex].id;
//       const newAnswer = selectedChoice; // Jawaban yang baru dipilih

//       // Simpan jawaban ke state sebelum pindah
//       const updatedAnswers = [...answers, { questionId: questionId, selectedChoice: newAnswer }];
//       setAnswers(updatedAnswers);

//       setCurrentQuestionIndex(updatedIndex);
//       setQuestionId(previousQuestionId);
//       const savedAnswer = answerMap[previousQuestionId];

//       // Perbarui selectedChoice berdasarkan jawaban yang sudah tersimpan
//       if (savedAnswer) {
//         setSelectedChoice(savedAnswer);
//       } else {
//         setSelectedChoice('');
//       }
//     }
//   };

//   const moveToNextQuestion = async () => {
//     if (currentQuestionIndex < questions.length - 1) {
//       const updatedIndex = currentQuestionIndex + 1;
//       const nextQuestionId = questions[updatedIndex].id;

//       // Simpan jawaban ke state sebelum pindah
//       const updatedAnswers = [...answers, { questionId, selectedChoice }];
//       setAnswers(updatedAnswers);

//       setQuestionId(nextQuestionId);
//       setCurrentQuestionIndex(updatedIndex);

//       const savedAnswer = answerMap[nextQuestionId];
//       if (savedAnswer) {
//         setSelectedChoice(savedAnswer);
//       } else {
//         setSelectedChoice('');
//       }
//     } else {
//       // Simpan jawaban ke state sebelum menyelesaikan
//       const updatedAnswers = [...answers, { questionId, selectedChoice }];
//       setAnswers(updatedAnswers);

//       await submitAnswer(); // Pemanggilan submitAnswer saat menyelesaikan ujian
//       setExamFinished(true);
//       showUserScore();
//     }
//   };

//   const submitAnswer = async () => {
//     try {
//       const token = localStorage.getItem('token');
//       if (!token) {
//         console.error('Token not found');
//         return;
//       }

//       const config = {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       };

//       // Menggunakan endpoint untuk menyimpan seluruh array jawaban
//       await axios.post('http://localhost:3002/submit-answers', { answers }, config);
//     } catch (error) {
//       console.error('Failed to submit answers:', error);
//     }
//   };

//   const showUserScore = async () => {
//     try {
//       const token = localStorage.getItem('token');
//       if (!token) {
//         console.error('Token not found');
//         return;
//       }

//       const config = {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       };

//       const response = await axios.get('http://localhost:3002/show-score', config);
//       if (response.data.userScore) {
//         setUserScore(response.data.userScore.score);
//       } else {
//         console.error('User score not found in response:', response.data);
//       }
//     } catch (error) {
//       console.error('Failed to fetch user score:', error);
//     }
//   };

//   const navigate = useNavigate();

//   const resetUserScore = async () => {
//     try {
//       const token = localStorage.getItem('token');
//       if (!token) {
//         console.error('Token not found');
//         return;
//       }

//       const config = {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       };

//       // Panggil endpoint reset-score
//       const response = await axios.post('http://localhost:3002/reset-score', null, config);

//       if (response.status === 200) {
//         console.log('Skor berhasil direset ke 0');
//         // Tambahkan logika atau navigasi jika diperlukan setelah reset skor
//         navigate('/');
//       } else {
//         console.error('Failed to reset user score:', response.data);
//       }
//     } catch (error) {
//       console.error('Failed to reset user score:', error);
//     }
//   };

//   return (
//     <>
//       <Navbar />
//       <div className="question-container">
//         {(!examFinished && questions.length > 0 && currentQuestionIndex < questions.length) && (
//           <div>
//             <p>{questions[currentQuestionIndex].question}</p>
//             <ul>
//               {questions[currentQuestionIndex].choices.map((choice, index) => (
//                 <li key={index} onClick={() => handleAnswerSelection(choice)} className="choice">
//                   <input type="checkbox" checked={choice === selectedChoice} readOnly className="checkbox" />
//                   {choice}
//                 </li>
//               ))}
//             </ul>
//             <button onClick={moveToPreviousQuestion} disabled={currentQuestionIndex === 0}>
//               Previous
//             </button>
//             <button onClick={moveToNextQuestion} disabled={examFinished}>
//               {currentQuestionIndex === questions.length - 1 ? 'Finish' : 'Next'}
//             </button>
//           </div>
//         )}
//         {(examFinished || timeLeft <= 0) && (
//           <div className="result">
//             <h3>Nilai:</h3>
//             <p>{userScore}</p>
//             <button onClick={resetUserScore}>Selesai</button>
//           </div>
//         )}
//         {(timeLeft <= 0 && !examFinished) && (
//           <div className="result">
//             <h3>Waktu Habis</h3>
//             <p>Nilai tidak tersedia</p>
//           </div>
//         )}
//         {(timeLeft > 0 && !examFinished) && (
//           <div className="timer top-right">
//             <p>
//               Waktu Tersisa: {Math.floor(timeLeft / 60)}:{(timeLeft % 60).toString().padStart(2, '0')}
//             </p>
//           </div>
//         )}
//       </div>
//       <Footer />
//     </>
//   );
// };

// export default QuestionViewer;

// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from './Header';
import Footer from './FooterNew';
// import '../css/question.css';
// import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const QuestionViewer = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedChoice, setSelectedChoice] = useState('');
  const [questionId, setQuestionId] = useState('');
  const [examFinished, setExamFinished] = useState(false);
  const [userScore, setUserScore] = useState(null);
  const [timeLeft, setTimeLeft] = useState(90); // 15 menit = 900 detik
  const [timerRunning, setTimerRunning] = useState(true);
  const [answerMap, setAnswerMap] = useState({}); // Map untuk menyimpan jawaban
  const [answers, setAnswers] = useState([]); // State untuk menyimpan jawaban dalam format yang diinginkan

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

  // Fungsi untuk menyimpan jawaban setiap pertanyaan
  const saveAnswer = (questionId, selectedChoice) => {
    const updatedAnswerMap = { ...answerMap, [questionId]: selectedChoice };
    setAnswerMap(updatedAnswerMap);
  };

  useEffect(() => {
    const timer = setTimeout(async () => {
      if (timerRunning && timeLeft > 0) {
        setTimeLeft(timeLeft - 1);
      } else {
        setTimerRunning(false);
        if (!examFinished) {
          setExamFinished(true);
          await submitAnswer(); // Pemanggilan submitAnswer saat waktu habis
          showUserScore();
        }
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft, timerRunning, examFinished]);

  const handleAnswerSelection = (choice) => {
    setSelectedChoice(choice);
    saveAnswer(questionId, choice); // Menyimpan jawaban saat memilih
  };

  const moveToPreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      const updatedIndex = currentQuestionIndex - 1;
      const previousQuestionId = questions[updatedIndex].id;
      const newAnswer = selectedChoice; // Jawaban yang baru dipilih

      // Simpan jawaban ke state sebelum pindah
      const updatedAnswers = [...answers, { questionId: questionId, selectedChoice: newAnswer }];
      setAnswers(updatedAnswers);

      setCurrentQuestionIndex(updatedIndex);
      setQuestionId(previousQuestionId);
      const savedAnswer = answerMap[previousQuestionId];

      // Perbarui selectedChoice berdasarkan jawaban yang sudah tersimpan
      if (savedAnswer) {
        setSelectedChoice(savedAnswer);
      } else {
        setSelectedChoice('');
      }
    }
  };

  const moveToNextQuestion = async () => {
    if (currentQuestionIndex < questions.length - 1) {
      const updatedIndex = currentQuestionIndex + 1;
      const nextQuestionId = questions[updatedIndex].id;

      // Simpan jawaban ke state sebelum pindah
      const updatedAnswers = [...answers, { questionId, selectedChoice }];
      setAnswers(updatedAnswers);

      setQuestionId(nextQuestionId);
      setCurrentQuestionIndex(updatedIndex);

      const savedAnswer = answerMap[nextQuestionId];
      if (savedAnswer) {
        setSelectedChoice(savedAnswer);
      } else {
        setSelectedChoice('');
      }
    } else {
      // Simpan jawaban ke state sebelum menyelesaikan
      const updatedAnswers = [...answers, { questionId, selectedChoice }];
      setAnswers(updatedAnswers);

      await submitAnswer(); // Pemanggilan submitAnswer saat menyelesaikan ujian
      setExamFinished(true);
      showUserScore();
    }
  };

const SUBMIT_ANSWERS_URL = 'http://localhost:3002/submit-answers';
const SHOW_SCORE_URL = 'http://localhost:3002/show-score';
const RESET_SCORE_URL = 'http://localhost:3002/reset-score';


  const submitAnswer = async () => {
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

      // Menggunakan endpoint untuk menyimpan seluruh array jawaban
      await axios.post(SUBMIT_ANSWERS_URL, { answers }, config);
    } catch (error) {
      console.error('Failed to submit answers:', error);
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

      const response = await axios.get(SHOW_SCORE_URL, config);
      if (response.data.userScore) {
        setUserScore(response.data.userScore.score);
      } else {
        console.error('User score not found in response:', response.data);
      }
    } catch (error) {
      console.error('Failed to fetch user score:', error);
    }
  };

  // const navigate = useNavigate();

  const resetUserScore = async () => {
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

      // Panggil endpoint reset-score
      const response = await axios.post(RESET_SCORE_URL, null, config);

      if (response.status === 200) {
        console.log('Skor berhasil direset ke 0');
        // Tambahkan logika atau navigasi jika diperlukan setelah reset skor
        // navigate('/');
      } else {
        console.error('Failed to reset user score:', response.data);
      }
    } catch (error) {
      console.error('Failed to reset user score:', error);
    }
  };

  return (
    <>
      <Navbar />
      <div className='bg-[#F1FEFF]'>
      <div className="max-w-2xl mx-auto p-6 bg-[#e0f2fe] rounded-md shadow-md mt-10">
        {!examFinished && questions.length > 0 && currentQuestionIndex < questions.length && (
          <div>
            <p className="text-xl font-bold mb-4">{questions[currentQuestionIndex].question}</p>
            <ul>
              {questions[currentQuestionIndex].choices.map((choice, index) => (
                <li key={index} onClick={() => handleAnswerSelection(choice)} className="flex items-center mb-2 cursor-pointer">
                  <input type="checkbox" checked={choice === selectedChoice} readOnly className="mr-2" />
                  {choice}
                </li>
              ))}
            </ul>
            <button onClick={moveToPreviousQuestion} disabled={currentQuestionIndex === 0} className="bg-blue-500 text-white py-2 px-4 rounded-md mr-2">
              Previous
            </button>
            <button onClick={moveToNextQuestion} disabled={examFinished} className="bg-blue-500 text-white py-2 px-4 rounded-md">
              {currentQuestionIndex === questions.length - 1 ? 'Finish' : 'Next'}
            </button>
          </div>
        )}
        {(examFinished || timeLeft <= 0) && (
          <div className="result mt-8">
            <h3 className="text-xl font-bold mb-2">Nilai:</h3>
            <p className="mb-4">{userScore}</p>
            <div className="flex">
              <Link onClick={resetUserScore} to="/mycourses">
                <button className="bg-blue-500 text-white py-2 px-4 rounded-md mr-2">Tes Ulang</button>
              </Link>
              <Link onClick={resetUserScore} to="/">
                <button className="bg-green-500 text-white py-2 px-4 rounded-md">Selesai</button>
              </Link>
            </div>
          </div>
        )}
        {timeLeft <= 0 && !examFinished && (
          <div className="result mt-8">
            <h3 className="text-xl font-bold mb-2">Waktu Habis</h3>
            <p>Nilai tidak tersedia</p>
          </div>
        )}
        {timeLeft > 0 && !examFinished && (
  <div className="timer absolute top-20 right-60 mt-8">
  <p className="text-lg">
              Waktu Tersisa: {Math.floor(timeLeft / 60)}:{(timeLeft % 60).toString().padStart(2, '0')}
            </p>
          </div>
        )}
      </div>
      </div>
      <Footer />
    </>
  );
};


export default QuestionViewer;

