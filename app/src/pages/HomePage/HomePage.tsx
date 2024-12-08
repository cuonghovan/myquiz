import { useState } from "react"
import { useAuth } from "react-oidc-context";
import { useNavigate } from 'react-router-dom';

export const HomePage = () => {
    const [quizId, setQuizId] = useState('');
    const auth = useAuth();
    const navigate = useNavigate();

    const onQuizIdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        setQuizId(e.target.value);
    }

    const joinQuiz = () => {
        fetch("https://m8q71oqpd6.execute-api.us-east-1.amazonaws.com/quiz/join", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': auth.user?.access_token || '',
            },
            body: JSON.stringify({
                quizId: quizId,
                userId: auth.user?.profile.sub
            }),
        })
            .then(response => {
                if (response.status === 200) {
                    return response.json();
                } else {
                    return response.json().then(err => {
                        throw new Error(err.message || 'Something went wrong');
                    });
                }
            })
            .then(result => {
                console.log(result);
                navigate(`/quiz/${quizId}`);
            })
            .catch(error => {
                alert(error.message);
                console.log('error', error);
            });
    }

    return (
        <div className=" min-h-96 bg-gray-100 flex flex-col items-center justify-center">
            <div className="p-8 bg-white rounded-lg shadow-lg max-w-md w-full mx-4">
                <h1 className="text-3xl font-bold text-gray-900 text-center mb-6">
                    Join Quiz Session
                </h1>
                <div className="flex flex-col gap-4">
                    <input 
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                        placeholder="Enter Quiz ID" 
                        value={quizId} 
                        onChange={onQuizIdChange}
                        aria-label="Quiz ID"
                    />
                    <button 
                        className="w-full px-6 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                        onClick={joinQuiz}
                        disabled={!quizId.trim()}
                    >
                        Join Quiz
                    </button>
                </div>
            </div>
        </div>
    )
}
