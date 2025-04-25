import { Meal } from "@entities/recipe/api/searchMeal";
import { Text, Flex, Title, List, Skeleton, Badge } from "@mantine/core";

export const ViewRecipeWidget = ({
  recipe,
  load,
}: {
  recipe: Meal | null;
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
          <Title order={3}>{recipe.meal}</Title>
          <Text size="md">You will need some of those: </Text>
          <List>
            {recipe.ingredients.map((item) => (
              <Badge key={item.name + item.measure}>
                {item.name} - {item.measure}
              </Badge>
            ))}
          </List>
          <Badge color="red">{recipe.category}</Badge>
          <Badge color="gray">{recipe.area}</Badge>
          <Badge color="grape">{recipe.tags}</Badge>
          <Text size="md">{recipe.instructions}</Text>
        </>
      )}
    </Flex>
  );
};
