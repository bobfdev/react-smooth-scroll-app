import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages';
import SignIn from './pages/signin';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signin' element={<SignIn />} />
      </Routes>
    </Router>
  );
}

export default App;
