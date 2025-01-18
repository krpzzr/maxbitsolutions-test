import React from 'react';
import { useNavigate } from 'react-router-dom';

import styles from './styles.module.scss';

const NotFound: React.FC = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/');
  };

  return (
    <div className={styles.wrapper}>
      <img src="/page-not-found.png" alt="404 Page" />
      <h2>Oops! Looks like you're lost...</h2>
      <button onClick={handleGoHome}>Take Me Home</button>
    </div>
  );
};

export default NotFound;
