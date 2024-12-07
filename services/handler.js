const AWS = require('aws-sdk');
const dynamoDb = new AWS.DynamoDB.DocumentClient();

exports.joinQuiz = async (event) => {
  const { quizId, userId } = JSON.parse(event.body);
  const participantId = `${userId}#${quizId}`;

  // Logic to add participant to the Participants table
  const params = {
    TableName: 'Participants',
    Item: {
      ParticipantID: participantId,
      QuizID: quizId,
      UserID: userId,
      Score: 0,
    },
  };

  await dynamoDb.put(params).promise();
  return {
    statusCode: 200,
    body: JSON.stringify({ message: 'Joined quiz successfully!' }),
  };
};

exports.submitAnswer = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify({ message: 'Submitted successfully!' }),
  };
};

exports.getParticipants = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify({ message: 'Get leaderboard successfully!' }),
  };
};
