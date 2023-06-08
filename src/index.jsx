import { createRoot } from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import '@fortawesome/fontawesome-free/css/all.css';
import Btn from './components/btn';
import CARD_NEWS_PROFILE from './components/card';


createRoot(document.getElementById('root')).render(
      
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/btn' element={<Btn />} />
        <Route path='/card' element={<CARD_NEWS_PROFILE />} />
      </Routes>
    </Router>
);


reportWebVitals();
