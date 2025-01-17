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
        <p>
          <strong>Category:</strong> {cocktail.strCategory}
        </p>
        <p>
          <strong>Alcoholic:</strong> {cocktail.strAlcoholic}
        </p>
        <p>
          <strong>Glass:</strong> {cocktail.strGlass}
        </p>
        <h2>Instructions:</h2>
        <p>{cocktail.strInstructions}</p>
        <h2>List of Ingredients:</h2>
        <ul>
          {cocktail.ingredients.map((item, index) => (
            <li key={index}>
              {item.measure} {item.ingredient}
            </li>
          ))}
        </ul>
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
