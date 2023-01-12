import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/home/Home";
import Quiz from "./pages/quiz/Quiz";
import "./app.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/quiz" element={<Quiz />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
