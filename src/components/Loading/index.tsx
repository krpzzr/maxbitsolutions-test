import React from 'react';

import styles from './styles.module.scss';

const Loading: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <p>Loading...</p>
    </div>
  );
};

export default Loading;