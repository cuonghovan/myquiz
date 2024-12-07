import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { mockQuizData } from '../../mockData';
import { useNavigate } from 'react-router-dom';
import { Loading } from '../../components/Loading/Loading';

interface Question {
    questionId: string;
    questionText: string;
    options: string[];
    correctAnswer: string;
}

interface Quiz {
    quizId: string;
    title: string;
    questions: Question[];
    totalQuestions: number;
    status: "active" | "inactive" | "completed";
}

interface UserAnswers {
    [key: string]: string;
}

export const QuizPage = () => {
  const [quizData, setQuizData] = useState<Quiz | null>(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<UserAnswers>({});
  const { quizId } = useParams();
  const [score, setScore] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    setQuizData(mockQuizData as Quiz);
  }, [quizId]);

  const handleAnswerSelect = (questionId: string, answer: string) => {
    setUserAnswers(prev => ({
      ...prev,
      [questionId]: answer,
    }));
  };

  const handleNextQuestion = () => {
    if (!quizData) return;
    // TODO: submit answers to backend and calculate score
    const currentQuestion = quizData.questions[currentQuestionIndex];
    const userAnswer = userAnswers[currentQuestion.questionId];
    if (userAnswer === currentQuestion.correctAnswer) {
      setScore(prev => prev + 10);
    }
    setCurrentQuestionIndex(prev => prev + 1);
  };

  const viewLeaderboard = () => {
    navigate(`/leaderboard/${quizId}`);
  }

  const goHome = () => {
    navigate('/');
  }

  if (!quizData) {
    return <Loading />;
  }

  const currentQuestion = quizData.questions[currentQuestionIndex];
  const isAnswerSelected = Boolean(userAnswers[currentQuestion?.questionId]);

  return (
    <div className="min-h-96 bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-8">
        <div className="flex justify-between items-center mb-6">
          <button
            onClick={goHome}
            className="bg-gray-100 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-200"
          >
            ← Back to Home
          </button>
          <h2 className="text-3xl font-bold text-gray-900">{quizData.title}</h2>
        </div>
        <div className="bg-blue-50 rounded-lg p-4 mb-6">
          <h3 className="text-xl font-semibold text-blue-700">Score: {score}</h3>
        </div>
        {currentQuestionIndex > quizData.totalQuestions - 1 ? (
          <>
            <h3 className="text-2xl font-semibold text-gray-800">Your Answers:</h3>
            <ul className="space-y-4">
              {Object.entries(userAnswers).map(([questionId, answer], index) => (
                <li key={questionId} className="bg-gray-50 rounded-lg p-4">
                  <p className="text-lg font-medium text-gray-700">Question: {quizData.questions[index].questionText}</p>
                  <p className="mt-2">
                    Answer: <span className="font-medium">{answer}</span>
                    <span className={`ml-2 px-3 py-1 rounded-full text-sm ${quizData.questions[index].correctAnswer === answer ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                      {quizData.questions[index].correctAnswer === answer ? 'Correct' : 'Incorrect'}
                    </span>
                  </p>
                </li>
              ))}
            </ul>
            <button 
              onClick={viewLeaderboard}
              className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 font-semibold"
            >
              View leaderboard
            </button>
          </>
        ) : (
          <>
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-medium text-gray-600">Question: {currentQuestionIndex + 1}/{quizData.totalQuestions}</h3>
            </div>
            <h3 className="text-xl font-semibold text-gray-800">{currentQuestion.questionText}</h3>
            <ul className="space-y-3">
              {currentQuestion.options.map((option) => (
                <li key={option}>
                  <label className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 cursor-pointer">
                    <input
                      type="radio"
                      name={`question-${currentQuestion.questionId}`}
                      value={option}
                      onChange={() => handleAnswerSelect(currentQuestion.questionId, option)}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                    />
                    <span className="ml-3 text-gray-700">{option}</span>
                  </label>
                </li>
              ))}
            </ul>
            <button 
              onClick={handleNextQuestion}
              disabled={!isAnswerSelected}
              className={`w-full py-3 px-6 rounded-lg font-semibold ${
                isAnswerSelected 
                  ? 'bg-blue-600 text-white hover:bg-blue-700' 
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
            >
              Next
            </button>
          </>
        )}
      </div>
    </div>
  );
};
