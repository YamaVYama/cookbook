import { fetchRecipe } from "@entities/recipe";
import { Recipe as DataRecipe } from "@entities/recipe/api/recipe";

import { Button, Chip, Skeleton, TextInput } from "@mantine/core";
import { ViewRecipeWidget } from "@widgets/index";
import { useState } from "react";

export const Recipe = () => {
  const [recipe, setRecipe] = useState<DataRecipe[] | undefined>(undefined);
  const [currentRecipe, setCurrentRecipe] = useState<DataRecipe | null>(null);
  const [query, setQuery] = useState<string | undefined>(undefined);
  const [isLoad, setIsLoad] = useState(false);

  const handleClickRecipe = (rec: DataRecipe) => {
    setCurrentRecipe(rec);
  };

  const handleSearchRecipe = async () => {
    if (!query) return;
    setIsLoad(true);
    setRecipe(undefined);
    const data = await fetchRecipe(query);
    setRecipe(data);
    setIsLoad(false);
  };

  const handleChangeQuery: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setQuery(e.target.value);
  };

  return (
    <div>
      <TextInput
        style={{ marginBottom: 24 }}
        onChange={handleChangeQuery}
        label="Search for recipe"
        placeholder="E.g. borchs"
      />
      <Button style={{ marginBottom: 24 }} onClick={handleSearchRecipe}>
        Search recipe
      </Button>
      {isLoad && <Skeleton height={20} radius="xl"></Skeleton>}
      {recipe && !isLoad && (
        <div>
          {recipe.map((rec) => (
            <Chip onClick={() => handleClickRecipe(rec)}>{rec.title}</Chip>
          ))}
        </div>
      )}
      {currentRecipe && (
        <ViewRecipeWidget load={isLoad} recipe={currentRecipe} />
      )}
    </div>
  );
};
