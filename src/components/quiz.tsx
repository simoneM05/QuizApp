import { useState } from "react";
import { Results } from "./results";

export const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const initialAnswer: (string | null)[] = [null, null, null];
  const [UserAnswer, setUserAnswer] =
    useState<(string | null)[]>(initialAnswer);
  const [isQuizCompleted, setIsQuizCompleted] = useState(false);

  const questionBank = [
    {
      question: "what is the capital of France?",
      options: ["Paris", "London", "Berlin", "Madrid"],
      answer: "Paris",
    },
    {
      question: "what language is used for web development?",
      options: ["Python", "Java", "JavaScript", "C++"],
      answer: "JavaScript",
    },
    {
      question: "what is the largest planet in our solar system?",
      options: ["Earth", "Mars", "Jupiter", "Saturn"],
      answer: "Jupiter",
    },
  ];

  const HandleAnswerOption = (selectedOption: string) => {
    const newUserAnswer = [...UserAnswer];
    newUserAnswer[currentQuestion] = selectedOption;
    setUserAnswer(newUserAnswer);
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setUserAnswer(initialAnswer);
    setIsQuizCompleted(false);
  };
  const goNext = () => {
    if (currentQuestion === questionBank.length - 1) {
      setIsQuizCompleted(true);
      return;
    }
    setCurrentQuestion(currentQuestion + 1);
  };
  const goPrev = () => {
    setCurrentQuestion(currentQuestion - 1);
  };
  const selectedAnswer = UserAnswer[currentQuestion];

  if (isQuizCompleted) {
    return (
      <Results
        userAnswer={UserAnswer}
        questionBank={questionBank}
        restartQuiz={restartQuiz}
      />
    );
  }

  return (
    <div>
      <h2>Question {currentQuestion + 1}</h2>
      <h2>{questionBank[currentQuestion].question}</h2>
      {questionBank[currentQuestion].options.map((option, index) => (
        <button
          className={"option" + (selectedAnswer === option ? " selected" : "")}
          onClick={() => HandleAnswerOption(option)}
          key={index}
        >
          {option}
        </button>
      ))}
      <div className="nav-buttons">
        <button onClick={() => goPrev()} disabled={currentQuestion === 0}>
          Previous
        </button>
        <button onClick={() => goNext()} disabled={!selectedAnswer}>
          {currentQuestion === questionBank.length - 1 ? "Finish quiz" : "Next"}
        </button>
      </div>
    </div>
  );
};
