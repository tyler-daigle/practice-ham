export function calculateScore(examData, answerList, answeredQuestions) {
  let numCorrect = 0;

  Object.keys(answeredQuestions).forEach((questionId) => {
    const answer = answeredQuestions[questionId];
    if (answer === answerList[questionId]) {
      numCorrect++;
    }
  });

  return {
    numCorrect,
    grade: Math.ceil((numCorrect / examData.numQuestions) * 100),
    pass: numCorrect >= examData.passingScore ? true : false,
  };
}
