import { useRecipeState } from "@features/get-recipe";

import { Button, Chip, Skeleton, TextInput } from "@mantine/core";
import { ViewRecipeWidget } from "@widgets/index";
import { useState } from "react";

/* export const Recipe = () => {
  const [query, setQuery] = useState<string | undefined>(undefined);
  const {
    handleSearchRecipe,
    isLoad,
    recipe,
    currentRecipe,
    setCurrentRecipe,
  } = useRecipeState(query);

  const handleClickRecipe = (rec: DataRecipe) => {
    setCurrentRecipe(rec);
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
      <ViewRecipeWidget load={isLoad} recipe={currentRecipe} />
    </div>
  );
};
*/
