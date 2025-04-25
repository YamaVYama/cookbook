import { apiEndpoints, fetchData } from "@shared/api";

export async function searchMeal(search: string) {
  const dtoObject = await fetchData(apiEndpoints.search.endpoint, [
    [apiEndpoints.search.params.byName, search],
  ]);

  return convertMealDto(dtoObject.meals);
}

interface MealDto {
  idMeal: string | null;
  strMeal: string | null;
  strMealAlternate: string | null;
  strCategory: string | null;
  strArea: string | null;
  strInstructions: string | null;
  strMealThumb: string | null;
  strTags: string | null;
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
  strIngredient13: string | null;
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

export interface Meal {
  idMeal: string;
  meal: string;
  mealAlternative: string | null;
  category: string;
  area: string;
  instructions: string;
  mealThumb: string;
  tags: string;
  youtube: string;
  ingredients: {
    name: string;
    measure: string;
  }[];
  source: string;
  imageSource: string | null;
  creativeCommonsConfirmed: string | null;
  dateModified: string | null;
}

// try out regular expression
function convertKeyName(key: string) {
  if (key.includes("str")) {
    return key.slice(3).at(0)?.toLowerCase() + key.slice(4);
  }
  return key;
}

const regex = /(?<=ingredient)\d+/gm;

function convertMealDto(meals: MealDto[]): Meal[] {
  const convertedArray = meals.map((meal) => {
    const convertedObject: Record<string, string | null> = {};
    Object.keys(meal).forEach(
      (key) =>
        (convertedObject[convertKeyName(key)] = meal[key as keyof MealDto]),
    );
    return convertedObject;
  });

  return convertedArray.map((meal) => {
    const newObj: Record<string, unknown> = {};
    const ingredients: Record<string, string>[] = [];

    Object.entries(meal).forEach((entry) => {
      if (entry[0].includes("ingredient") && entry[1]?.trim()) {
        ingredients.push({
          name: entry[1],
          measure: meal["measure" + entry[0].match(regex)] ?? "",
        });
      }

      if (entry[0].includes("ingredient") || entry[0].includes("measure"))
        return;

      newObj[entry[0]] = entry[1];
    });

    newObj.ingredients = ingredients as { name: string; measure: string }[];

    return newObj;
  }) as unknown as Meal[];
} // туточки надо доконвертить саму структуру, пока тут только ключики конвертятся
