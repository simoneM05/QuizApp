import "./index.css";
import { Quiz } from "./components/quiz";

export const App = () => {
  return (
    <div className="app-container">
      <h1 className="app-title">Quiz App</h1>
      <Quiz />
    </div>
  );
};
