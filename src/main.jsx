import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router';
import './index.css'
import App from './App.jsx'
import DegreeVerification from './DegreeVerification.jsx';
import StudentProfile from './components/StudentProfile.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/degree-verification' element={<DegreeVerification />} />
        <Route path='/studentProfile/:rollNumber' element={<StudentProfile />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
