export interface Cocktail {
  idDrink: string;
  strDrink: string;
  strCategory: string;
  strAlcoholic: string;
  strGlass: string;
  strInstructions: string;
  strDrinkThumb: string;
  ingredients: { measure: string; ingredient: string }[];
}

export interface CocktailsState {
  cocktailsByCode: { [key: string]: Cocktail[] };
  loading: boolean;
  error: string | null;
}
