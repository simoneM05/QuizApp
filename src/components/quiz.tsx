import { useState } from "react";

export const Quiz = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
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

  function HandleSelectOption(selectedOption: string) {
    setSelectedOption(selectedOption);
  }

  function HandleAnswerOption(selectedOption: string) {
    HandleSelectOption(selectedOption);
    if (selectedOption === questionBank[currentQuestionIndex].answer) {
      console.log("Correct!");
    } else {
      console.log("Incorrect!");
    }
  }
  function HandleNextQuestion() {}
  function HandlePreviousQuestion() {}

  return (
    <div>
      <h2>Question {currentQuestionIndex + 1}</h2>
      <h2>{questionBank[currentQuestionIndex].question}</h2>
      {questionBank[currentQuestionIndex].options.map((option, index) => (
        <button
          className="option"
          onClick={() => HandleAnswerOption(option)}
          key={index}
        >
          {option}
        </button>
      ))}
      {selectedOption !== "" && <p>Option Selected: {selectedOption}</p>}
      <div className="nav-buttons">
        <button onClick={() => HandlePreviousQuestion()}>Previous</button>
        <button onClick={() => HandleNextQuestion()}>Next</button>
      </div>
    </div>
  );
};
