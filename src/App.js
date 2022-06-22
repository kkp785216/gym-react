import './Utility.css'
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Components/Home/Home';
import Posts from './Components/Pages/Posts/Posts';
import Search from './Components/Pages/Search/Search';
import Category from './Components/Pages/Category/Category'

function App() {
  const basename = "/react4/"
  return (
    <Router basename={basename}>
      <Routes>
        <Route exact path="/" element={<Home  basename={basename}/>} />
        <Route exact path={`/page/:page`} element={<Home basename={basename}/>} />
        <Route exact path='/:postId' element={<Posts />} />
        <Route exact path='/search' element={<Search />} />
        <Route exact path='/category/:categoryId' element={<Category />} />
        <Route path='/*' element={<div>Page Not Found</div>}/>
      </Routes>
    </Router>
  );
}

export default App;
