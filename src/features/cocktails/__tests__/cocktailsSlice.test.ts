import cocktailsReducer, { initialState } from '../cocktailsSlice';
import { fetchCocktails } from '../cocktailsActions';

describe('cocktailsSlice', () => {
  it('should return the initial state', () => {
    expect(cocktailsReducer(undefined, { type: 'unknown' })).toEqual(initialState);
  });

  describe('fetchCocktails.pending', () => {
    it('should set loading to true and clear error', () => {
      const action = { type: fetchCocktails.pending.type };
      const state = cocktailsReducer(initialState, action);

      expect(state.loading).toBe(true);
      expect(state.error).toBeNull();
    });
  });

  describe('fetchCocktails.fulfilled', () => {
    it('should set loading to false and add cocktails to cocktailsByCode', () => {
      const mockPayload = {
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
      };

      const action = { type: fetchCocktails.fulfilled.type, payload: mockPayload };
      const state = cocktailsReducer(initialState, action);

      expect(state.loading).toBe(false);
      expect(state.cocktailsByCode['margarita']).toEqual(mockPayload.cocktails);
    });
  });

  describe('fetchCocktails.rejected', () => {
    it('should set loading to false and set error', () => {
      const mockError = { message: 'Failed to fetch cocktails' };
      const action = { type: fetchCocktails.rejected.type, error: mockError };
      const state = cocktailsReducer(initialState, action);

      expect(state.loading).toBe(false);
      expect(state.error).toBe(mockError.message);
    });
  });
});