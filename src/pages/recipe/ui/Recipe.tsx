import { fetchRecipe } from "@entities/recipe";

import {
  Button,
  Chip,
  TextInput,
  Text,
  List,
  Title,
  Flex,
  Skeleton,
} from "@mantine/core";
import { useState } from "react";

// temporary interface for prototyping
interface Recipe {
  title: string;
  ingredients: string;
  servings: string;
  instructions: string;
}

export const Recipe = () => {
  const [recipe, setRecipe] = useState<Recipe | null>(null);
  const [query, setQuery] = useState<string | undefined>(undefined);
  const [isLoad, setIsLoad] = useState(false);

  const handleButtonClick = async () => {
    if (!query) return;

    setIsLoad(true);
    setRecipe(null);
    const data = await fetchRecipe(query);
    setRecipe(data[0]);
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
      <Button style={{ marginBottom: 24 }} onClick={handleButtonClick}>
        Fetch recipe
      </Button>
      {isLoad && (
        <>
          <Skeleton height={24} mt={3} mb={6} radius="xl" />
          <Skeleton height={300} mt={6} radius="xl" />
          <Skeleton height={40} mt={6} radius="xl" />
        </>
      )}
      {recipe && (
        <Flex direction="column" gap="sm">
          <Title order={3}>{recipe.title}</Title>
          <Text size="md">You will need some of those: </Text>
          <List>
            {recipe.ingredients
              ?.split("|")
              .map((item) => <List.Item key={item}>{item}</List.Item>)}
          </List>
          <Chip>{recipe.servings}</Chip>
          <Text size="md">{recipe.instructions}</Text>
        </Flex>
      )}
    </div>
  );
};
