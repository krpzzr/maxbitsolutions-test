import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { getAPIUrl } from 'utils/urlUtils';
import { CocktailApiResponse, FetchCocktailsResult } from './cocktailsTypes';

const ALLOWED_CODES = ['margarita', 'mojito', 'a1', 'kir'];

export const fetchCocktails = createAsyncThunk(
  'cocktails/fetchCocktails',
  async (cocktailCode: string): Promise<FetchCocktailsResult> => {
    if (!ALLOWED_CODES.includes(cocktailCode)) {
      throw new Error('Invalid cocktail code');
    }

    const response = await axios.get<CocktailApiResponse>(
      `${getAPIUrl()}/search.php?s=${cocktailCode}`
    );

    const filteredCocktails = response.data.drinks
      .filter((drink) =>
        drink.strDrink.toLowerCase().includes(cocktailCode.toLowerCase())
      )
      .map((drink) => ({
        idDrink: drink.idDrink,
        strDrink: drink.strDrink,
        strCategory: drink.strCategory,
        strGlass: drink.strGlass,
        strInstructions: drink.strInstructions,
        strDrinkThumb: drink.strDrinkThumb,
        strAlcoholic: drink.strAlcoholic,
        ingredients: Array.from({ length: 15 }, (_, i) => ({
          measure: drink[`strMeasure${i + 1}`],
          ingredient: drink[`strIngredient${i + 1}`],
        })).filter((item) => item.measure && item.ingredient),
      }));

    return { cocktailCode, cocktails: filteredCocktails };
  }
);
