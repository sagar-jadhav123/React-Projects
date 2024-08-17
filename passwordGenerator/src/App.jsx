import { useState } from "react";
import quizData from "./Data/quizData";

function App() {
  const [currQuestionIndex, setCurrQuestionIndex] = useState(0);
  const [answeredOption, setAnsweredQuestion] = useState(null);
  const [score, setscore] = useState(0);

  const currQuestion = quizData.questions[currQuestionIndex];
  const handleSelectedAnswer = (answer) => {
    setAnsweredQuestion(answer);
  };

  const onNextClick = () => {
    if (answeredOption === currQuestion.answer) {
      setscore(score + 1);
    }
    if (currQuestionIndex < quizData.questions.length - 1)
      setCurrQuestionIndex(currQuestionIndex + 1);
    setAnsweredQuestion(null);
  };

  const onPrevClick = () => {
    if (currQuestionIndex > 0) setCurrQuestionIndex(currQuestionIndex - 1);
    setAnsweredQuestion(null);
  };

  return (
    <div>
      <h1>Quiz App</h1>
      {currQuestion ? (
        <div>
          <h2>
            Q.{currQuestionIndex + 1} {currQuestion.question}
          </h2>
          <ul>
            {currQuestion.options.map((option, i) => {
              return (
                <li
                  key={i}
                  onClick={() => handleSelectedAnswer(option)}
                  style={{
                    backgroundColor:
                      answeredOption === option ? "lightgray" : "transparent",
                    fontWeight: answeredOption === option ? "bold" : "normal",
                    border: "1px solid black",
                    padding: "8px",
                    margin: "4px 0",
                    cursor: "pointer",
                  }}
                >
                  {option}
                </li>
              );
            })}
          </ul>
          <button onClick={onPrevClick} disabled={currQuestionIndex === 0}>
            Previous
          </button>
          <button onClick={onNextClick} disabled={answeredOption === null}>
            Next
          </button>
        </div>
      ) : (
        <div>
          <h2>Quiz Over</h2>
          <p>
            Your Score : {score}/{quizData.questions.length}{" "}
          </p>
        </div>
      )}
    </div>
  );
}

export default App;
