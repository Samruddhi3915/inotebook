import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Home from "./components/Home";
import NewsState from "./context/notes/NoteState";
import Alert from "./components/Alert";
function App() {
  return (
    <NewsState>
      <BrowserRouter>
        <Navbar />
        <Alert message="This is an error" />
        <div className="container">
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route exact path="/about" element={<About />}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </NewsState>
  );
}

export default App;
