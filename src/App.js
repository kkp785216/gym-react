import './Utility.css'
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Components/Home/Home';
import Posts from './Components/Pages/Posts/Posts';
import Search from './Components/Pages/Search/Search';
import Write from './Components/Admin/Write'
import Read from './Components/Admin/Read';

function App() {
  const basename = "/react4/"
  return (
    <Router basename={basename}>
      <Routes>
        <Route exact path="/" element={<Home basename={basename} />} />
        <Route exact path={`/page/:page`} element={<Home basename={basename} />} />
        <Route exact path='/:postId' element={<Posts />} />
        <Route exact path='/search' element={<Search />} />
        <Route exact path='write' element={<Write />} />
        <Route exact path='read' element={<Read />} />
        <Route path='/*' element={<div>Page Not Found</div>} />
      </Routes>
    </Router>
  );
}

export default App;
