import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { fetchCocktails } from '../cocktailsActions';

jest.mock('axios');

describe('fetchCocktails Thunk', () => {
  it('should fetch cocktails successfully', async () => {
    const cocktailCode = 'margarita';
    const mockResponse = {
      data: {
        drinks: [
          {
            idDrink: '1',
            strDrink: 'Margarita',
            strCategory: 'Cocktail',
            strGlass: 'Cocktail glass',
            strInstructions: 'Mix all ingredients.',
            strDrinkThumb: 'https://example.com/margarita.jpg',
            strAlcoholic: 'Alcoholic',
            strMeasure1: '2 oz',
            strIngredient1: 'Tequila',
            strMeasure2: '1 oz',
            strIngredient2: 'Lime juice',
          },
        ],
      },
    };

    (axios.get as jest.Mock).mockResolvedValue(mockResponse);

    const dispatch = jest.fn();
    const getState = jest.fn();

    const result = await fetchCocktails(cocktailCode)(dispatch, getState, undefined);

    expect(result.payload).toEqual({
      cocktailCode: 'margarita',
      cocktails: [
        {
          idDrink: '1',
          strDrink: 'Margarita',
          strCategory: 'Cocktail',
          strGlass: 'Cocktail glass',
          strInstructions: 'Mix all ingredients.',
          strDrinkThumb: 'https://example.com/margarita.jpg',
          strAlcoholic: 'Alcoholic',
          ingredients: [
            { measure: '2 oz', ingredient: 'Tequila' },
            { measure: '1 oz', ingredient: 'Lime juice' },
          ],
        },
      ],
    });
  });
});