import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/home/Home";
import "./app.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route element={<HomePage />} path="/" />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
