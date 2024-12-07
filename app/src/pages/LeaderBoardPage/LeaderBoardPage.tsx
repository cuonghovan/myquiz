import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { mockLeaderboardData } from '../../mockData';

interface Participant {
    participantId: string;
    score: number;
}

export const LeaderBoardPage = () => {
  const [leaderboardData, setLeaderboardData] = useState([] as Participant[]);
  const { quizId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    // TODO: update leader board in realtime when score changes
    setLeaderboardData(mockLeaderboardData as Participant[]);
  }, [quizId]);

  const goHome = () => {
    navigate('/');
  }

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
          <h2 className="text-3xl font-bold text-gray-900">Leaderboard</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Rank
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Participant
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Score
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {leaderboardData.map((participant, index) => (
                <tr key={participant.participantId} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {index + 1}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {participant.participantId}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-semibold">
                    {participant.score}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
