import { Recipe } from "@entities/recipe/api/recipe";
import { Text, Flex, Title, List, Chip, Skeleton } from "@mantine/core";

export const ViewRecipeWidget = ({
  recipe,
  load,
}: {
  recipe: Recipe | null;
  load: boolean;
}) => {
  return (
    <Flex direction="column" gap="sm">
      {load && (
        <>
          <Skeleton height={24} mt={3} mb={6} radius="xl" />
          <Skeleton height={300} mt={6} radius="xl" />
          <Skeleton height={40} ml={1} mt={6} radius="xl" />
          <Skeleton height={200} mt={6} radius="xl" />
        </>
      )}
      {!load && recipe && (
        <>
          <Title order={3}>{recipe.title}</Title>
          <Text size="md">You will need some of those: </Text>
          <List>
            {recipe.ingredients.map((item) => (
              <List.Item key={item}>{item}</List.Item>
            ))}
          </List>
          <Chip>{recipe.servings}</Chip>
          <Text size="md">{recipe.instructions}</Text>
        </>
      )}
    </Flex>
  );
};
