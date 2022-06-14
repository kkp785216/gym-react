import './Utility.css'
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Components/Home/Home';

function App() {
  return (
    <Router  basename="/repo-name">
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
