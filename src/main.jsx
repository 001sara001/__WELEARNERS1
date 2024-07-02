import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './App.jsx';
import MenuCard from "./layouts/MenuCard.jsx";
import Enroll from './Enroll/Enroll.jsx';
import Easy from "./assets/Levels/Easy.jsx";
import Medium from './assets/Levels/Medium.jsx';
import Advanced from './assets/Levels/Advanced.jsx';

const Main = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/test2" element={<App />} />
       
        <Route path="/MenuCard" element={<MenuCard />} />
        <Route path="/Enroll" element={<Enroll />} />
        
      <Route path="/Easy" element={<Easy />} />
      <Route path="/Medium" element={<Medium />} />
      <Route path="/Advanced" element={<Advanced />} />
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
);
