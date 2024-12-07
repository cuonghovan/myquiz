export const mockQuizData = {
    quizId: "quiz1",
    title: "Vocalbulary quiz 1",
    questions: [
      {
        questionId: "q1",
        questionText: "Click the best synonym for adequate",
        options: [
          "frequent",
          "enough",
          "huge",
          "dramatic"
        ],
        correctAnswer: "enough"
      },
      {
        questionId: "q2",
        questionText: "Click the best synonym for illness",
        options: [
          "mystery",
          "disease",
          "entertainment",
          "comfort"
        ],
        correctAnswer: "disease"
      },
      {
        questionId: "q3",
        questionText: "Click the best synonym for recover",
        options: [
          "stay warm",
          "cover up",
          "lie down",
          "return to health"
        ],
        correctAnswer: "return to health"
      }
    ],
    totalQuestions: 3,
    status: "active"
}

export const mockLeaderboardData = [
    {
        participantId: "user2",
        score: 30
    },
    {
        participantId: "user1",
        score: 20
    },
    {
        participantId: "user3",
        score: 10
    }
]