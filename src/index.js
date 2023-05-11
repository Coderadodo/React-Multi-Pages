import React from 'react';
//import ReactDOM from 'react-dom';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Recovery from './routes/RecoveryPage'
import CloudPage from './routes/CloudPage'
import ContactPage from './routes/ContactPage'
/*
ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='/recovery' element={<Recovery />} />
      <Route path='/cloud' element={<CloudPage />} />
      <Route path='/contact' element={<ContactPage />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

*/




/*
mport React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
*/


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='/recovery' element={<Recovery />} />
      <Route path='/cloud' element={<CloudPage />} />
      <Route path='/contact' element={<ContactPage />} />
    </Routes>
  </BrowserRouter>,
  </React.StrictMode>
);

