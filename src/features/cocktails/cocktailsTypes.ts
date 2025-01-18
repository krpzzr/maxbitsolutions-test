export interface Cocktail {
  idDrink: string;
  strDrink: string;
  strCategory: string;
  strAlcoholic: string;
  strGlass: string;
  strInstructions: string;
  strDrinkThumb: string;
  [key: `strIngredient${number}`]: string | null;
  [key: `strMeasure${number}`]: string | null;
  ingredients: { measure: string | null; ingredient: string | null }[];
}

export interface CocktailsState {
  cocktailsByCode: { [key: string]: Cocktail[] };
  loading: boolean;
  error: string | null;
}

export interface CocktailApiResponse {
  drinks: Cocktail[];
}

export interface FetchCocktailsResult {
  cocktailCode: string;
  cocktails: Cocktail[];
}
