import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import styles from './styles.module.scss';

const cocktailCodes = ['margarita', 'mojito', 'a1', 'kir'];

const CocktailList: React.FC = () => {
  const location = useLocation();

  return (
    <div className={styles.sidebar}>
      <ul>
        {cocktailCodes.map((code) => (
          <li key={code}>
            <Link
              to={`/${code}`}
              className={location.pathname === `/${code}` ? styles.active : ''}
            >
              {code}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CocktailList;
