import { Meal, searchMeal } from "@entities/recipe/api/searchMeal";
import { useState } from "react";

export const useRecipeState = (query?: string) => {
  const [recipe, setRecipe] = useState<Meal[] | undefined>(undefined);
  const [currentRecipe, setCurrentRecipe] = useState<Meal | null>(null);
  const [isLoad, setIsLoad] = useState(false);

  const handleSearchRecipe = async () => {
    if (!query) return;
    setIsLoad(true);
    setRecipe(undefined);
    const data = await searchMeal(query);
    setRecipe(data);
    setIsLoad(false);
  };

  return {
    handleSearchRecipe,
    isLoad,
    recipe,
    currentRecipe,
    setCurrentRecipe,
  };
};
