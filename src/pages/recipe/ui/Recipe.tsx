import { Meal } from "@entities/recipe/api/searchMeal";
import { useRecipeState } from "@features/get-recipe";

import {
  Badge,
  Image,
  Text,
  Button,
  Flex,
  Skeleton,
  TextInput,
  SimpleGrid,
} from "@mantine/core";
import { ViewRecipeWidget } from "@widgets/index";
import { useState } from "react";

import styles from "./styles.module.css";

export const Recipe = () => {
  const [query, setQuery] = useState<string | undefined>(undefined);
  const {
    handleSearchRecipe,
    isLoad,
    recipe,
    currentRecipe,
    setCurrentRecipe,
  } = useRecipeState(query);

  const handleClickRecipe = (rec: Meal) => {
    setCurrentRecipe(rec);
  };

  const handleChangeQuery: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setQuery(e.target.value);
  };

  console.log(recipe);
  return (
    <div className={styles.red}>
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
        <SimpleGrid cols={4}>
          {recipe.map((rec) => (
            <Flex
              className={`${styles.recipeCard} ${currentRecipe?.idMeal === rec?.idMeal ? styles.recipeCardCurrent : ""}`}
              direction="column"
              gap="sm"
              mb="sm"
              key={rec.idMeal}
              onClick={() => handleClickRecipe(rec)}
            >
              <Image height={120} width={120} src={rec.mealThumb} />
              <Badge color="black">{rec.meal}</Badge>
              <Badge color="green">{rec.category}</Badge>
              <Text size="16px">{rec.tags?.split(",").join(", ")}</Text>
            </Flex>
          ))}
        </SimpleGrid>
      )}
      <ViewRecipeWidget load={isLoad} recipe={currentRecipe} />
    </div>
  );
};
