import { fetchData } from "@shared/consts";

interface RecipeDTO {
  title: string;
  ingredients: string;
  servings: string;
  instructions: string;
}

export interface Recipe {
  title: string;
  ingredients: string[];
  servings: string;
  instructions: string;
}

function convertDtoRecipe(data: RecipeDTO[]): Recipe[] {
  const result = data.map((recipe) => ({
    ...recipe,
    ingredients: recipe.ingredients.split("|"),
  }));

  return result;
}

export async function fetchRecipe(search: string) {
  try {
    const data = await fetchData(search);
    return convertDtoRecipe(data);
  } catch (e) {
    console.error("There has been error in fetching recipe", { error: e });
  }
}
