import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from 'hooks/useRedux';
import { fetchCocktails } from 'features/cocktails/cocktailsActions';
import Loading from 'components/Loading';
import NotFoundPage from 'pages/NotFound';
import CocktailList from 'features/cocktails/components/CocktailList';
import CocktailCard from 'features/cocktails/components/CocktailCard';

import styles from './styles.module.scss';

const CocktailsPage: React.FC = () => {
  const { cocktailCode } = useParams();
  const dispatch = useAppDispatch();
  const { cocktailsByCode, loading, error } = useAppSelector(
    (state) => state.cocktails
  );

  const cocktails = cocktailCode ? cocktailsByCode[cocktailCode] : [];

  useEffect(() => {
    if (cocktailCode && !cocktails) {
      dispatch(fetchCocktails(cocktailCode));
    }
  }, [cocktailCode, dispatch, cocktails]);

  if (error) return <NotFoundPage />;

  return (
    <div className={styles.wrapper}>
      <CocktailList />
      <div className={styles.details}>
        {loading || !cocktails ? <Loading /> : <CocktailCard cocktail={cocktails[0]} />}
      </div>
    </div>
  );
};

export default CocktailsPage;
