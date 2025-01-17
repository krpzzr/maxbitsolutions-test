import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import NotFoundPage from 'pages/NotFound';
import CocktailsPage from 'pages/Cocktails';

import styles from './App.module.scss';

const App: React.FC = () => {
  return (
    <Router>
      <div className={styles.app}>
        <Routes>
          <Route path="/" element={<Navigate to="/margarita" replace />} />
          <Route path="/:cocktailCode" element={<CocktailsPage/>} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;