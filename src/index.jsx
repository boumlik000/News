import { createRoot } from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import '@fortawesome/fontawesome-free/css/all.css';
import BTN from './components/btn';
import CARD_NEWS_PROFILE from './components/card';
import SEARCH from './components/serach';
import NAVBAR from './components/nav';
import TAG from './components/tags';
import CARDNEWS2 from './components/cardnews2';
import CARDNEWS1 from './components/cardnews1';
import CARDNEWS3 from './components/cardnews3';
import ICONTAG from './components/icontag';
import FOOTER from './components/footer';
import GALERYNEWS from './components/gallerynewstags';
import ARTICLE from './pages/article';
import NEWS from './pages/newsPage';


createRoot(document.getElementById('root')).render(
      
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/btn' element={<BTN />} />
        <Route path='/card' element={<CARD_NEWS_PROFILE />} />
        <Route path='/search' element={<SEARCH />} />
        <Route path='/nav' element={<NAVBAR />} />
        <Route path='/tags' element={<TAG />} />
        <Route path='/cd1' element={<CARDNEWS1  />} />
        <Route path='/cd2' element={<CARDNEWS2  />} />
        <Route path='/cd3' element={<CARDNEWS3  />} />
        <Route path='/ict' element={<ICONTAG  />} />
        <Route path='/footer' element={<FOOTER  />} />
        <Route path='/tagnews' element={<GALERYNEWS  />} />
        <Route path='/article/:id' element={<ARTICLE  />} />
        <Route path='/newsPage' element={<NEWS  />} />
      </Routes>
    </Router>
);


reportWebVitals();
