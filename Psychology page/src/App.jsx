import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/home";
import Footer from "./components/footer";
import Quiz from "./components/quiz";
import Quiz1 from "./components/quiz1";
function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/quiz1" element={<Quiz1 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;