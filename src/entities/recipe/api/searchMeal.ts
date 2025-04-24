import { apiEndpoints, fetchData } from "@shared/api";

export async function searchMeal(search: string) {
  const dtoObject = await fetchData(apiEndpoints.search.endpoint, [
    [apiEndpoints.search.params.byName, search],
  ]);
  return convertMealDto(dtoObject.meals);
}

interface MealDto {
  idMeal: string;
  strMeal: string;
  strMealAlternate: string | null;
  strCategory: string;
  strArea: string;
  strInstructions: string;
  strMealThumb: string;
  strTags: string;
  strYoutube: string;
  strIngredient1: string;
  strIngredient2: string;
  strIngredient3: string;
  strIngredient4: string;
  strIngredient5: string;
  strIngredient6: string;
  strIngredient7: string;
  strIngredient8: string;
  strIngredient9: string;
  strIngredient10: string;
  strIngredient11: string;
  strIngredient12: string;
  strIngredient13: string;
  strIngredient14: string;
  strIngredient15: string;
  strIngredient16: string;
  strIngredient17: string;
  strIngredient18: string;
  strIngredient19: string;
  strIngredient20: string;
  strMeasure1: string;
  strMeasure2: string;
  strMeasure3: string;
  strMeasure4: string;
  strMeasure5: string;
  strMeasure6: string;
  strMeasure7: string;
  strMeasure8: string;
  strMeasure9: string;
  strMeasure10: string;
  strMeasure11: string;
  strMeasure12: string;
  strMeasure13: string;
  strMeasure14: string;
  strMeasure15: string;
  strMeasure16: string;
  strMeasure17: string;
  strMeasure18: string;
  strMeasure19: string;
  strMeasure20: string;
  strSource: string;
  strImageSource: string | null;
  strCreativeCommonsConfirmed: string | null;
  dateModified: string | null;
}

interface Meal {
  id: string;
  name: string;
  altName: string | null;
  category: string;
  area: string;
  instructions: string;
  thumb: string;
  tags: string;
  youtube: string;
  ingredients: {
    name: string;
    measure: string;
  }[];
  source: string;
  imageSource: string | null;
  creativeCommonsConfirmed: string | null;
}

function convertKeyName(key: string) {
  if (key.includes("str")) {
    return key.slice(3).at(0)?.toLowerCase() + key.slice(4);
  }
  return key;
}

function convertMealDto(meals: MealDto[]) {
  return meals.map((meal) => {
    const convertedObject: Record<string, unknown> = {};
    Object.keys(meal).forEach(
      (key) =>
        (convertedObject[convertKeyName(key)] = meal[key as keyof MealDto]),
    );
    return convertedObject;
  }) as unknown[] as Meal[];
} // туточки надо доконвертить саму структуру, пока тут только ключики конвертятся
