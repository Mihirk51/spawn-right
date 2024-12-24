import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { Matches } from './pages/Matches';
import { Teams } from './pages/Teams';
import { Players } from './pages/Players';
import { Rankings } from './pages/Rankings';
import { News } from './pages/News';
import { About } from './pages/About';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="matches" element={<Matches />} />
          <Route path="teams" element={<Teams />} />
          <Route path="players" element={<Players />} />
          <Route path="rankings" element={<Rankings />} />
          <Route path="news" element={<News />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;