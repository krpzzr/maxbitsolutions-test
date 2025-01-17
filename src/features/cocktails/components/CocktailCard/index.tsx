import React from 'react';

import { Cocktail } from 'features/cocktails/cocktailsTypes';

import styles from './styles.module.scss';

interface CocktailCardProps {
  cocktail: Cocktail;
}

const CocktailCard: React.FC<CocktailCardProps> = ({ cocktail }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <h1>{cocktail.strDrink}</h1>
        <div className={styles.meta}>
          <p>{cocktail.strCategory}</p>
          <p>{cocktail.strAlcoholic}</p>
          <p>{cocktail.strGlass}</p>
        </div>
        <h2>Instructions:</h2>
        <p>{cocktail.strInstructions}</p>
        <h2>List of Ingredients:</h2>
        <ol>
          {cocktail.ingredients.map((item, index) => (
            <li key={index}>
              {item.measure} {item.ingredient}
            </li>
          ))}
        </ol>
      </div>
      <div className={styles.image}>
        <img
          src={cocktail.strDrinkThumb}
          alt={cocktail.strDrink}
          loading="lazy"
          className="cocktail-image"
        />
      </div>
    </div>
  );
};

export default CocktailCard;
