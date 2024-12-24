import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { Matches } from './pages/Matches';
import { Teams } from './pages/Teams';
import { Players } from './pages/Players';
import { Rankings } from './pages/Rankings';
import { News } from './pages/News';
import { Tournaments } from './pages/Tournaments';
import { Products } from './pages/Products';
import { Games } from './pages/Games';
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
          <Route path="tournaments" element={<Tournaments />} />
          <Route path="products" element={<Products />} />
          <Route path="games" element={<Games />} />
          <Route path="about" element={<About />} />
          <Route path="news" element={<News />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;