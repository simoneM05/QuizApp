interface ResultsProps {
  userAnswer: (string | null)[];
  questionBank: { question: string; options: string[]; answer: string }[];
  restartQuiz: () => void;
}

export const Results = ({
  userAnswer,
  questionBank,
  restartQuiz,
}: ResultsProps) => {
  const getScore = () => {
    let finalScore = 0;
    userAnswer.forEach((answer, index) => {
      if (answer === questionBank[index].answer) {
        finalScore++;
      }
    });
    return finalScore;
  };

  const score = getScore();

  return (
    <div>
      {" "}
      <h2>Quiz Completed!</h2>
      <p>
        Your Score:{score}/{questionBank.length}
      </p>
      <button className="restart-button" onClick={restartQuiz}>
        Restart Quiz
      </button>
    </div>
  );
};
