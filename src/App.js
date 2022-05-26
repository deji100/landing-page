import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CountDown from './components/countDownComp/countDown';
import ComingSoon from './components/pages/coming-soon';
import Nav from './components/navbar-footer/nav';
import About from './components/pages/about';
import Contact from './components/pages/contact';
import Blog from './components/pages/blog';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Nav />}>
            <Route index path='coming-soon' element={<ComingSoon />} />
            <Route path='about' element={<About />} />
            <Route path='blog' element={<Blog />} />
            <Route path='contact' element={<Contact />} />
          </Route>
        </Routes> 
      </Router>
    </div>
  );
}

export default App;
