import { fetchRecipe, Recipe } from "@entities/recipe/api/recipe";
import { useState } from "react";

export const useRecipeState = (query?: string) => {
  const [recipe, setRecipe] = useState<Recipe[] | undefined>(undefined);
  const [currentRecipe, setCurrentRecipe] = useState<Recipe | null>(null);
  const [isLoad, setIsLoad] = useState(false);

  const handleSearchRecipe = async () => {
    if (!query) return;
    setIsLoad(true);
    setRecipe(undefined);
    const data = await fetchRecipe(query);
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
