import { Meal } from "@entities/recipe/api/searchMeal";
import { Text, Flex, Title, Skeleton, Badge } from "@mantine/core";

export const ViewRecipeWidget = ({
  recipe,
  load,
}: {
  recipe: Meal | null;
  load: boolean;
}) => {
  if (!recipe) return null;
  return (
    <Flex direction="column" gap="sm" p="sm" bd="1px dashed black">
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
          <Flex wrap="wrap" gap="xs">
            {recipe.ingredients.map((item) => (
              <Badge key={item.name + item.measure}>
                {item.name} - {item.measure}
              </Badge>
            ))}
          </Flex>
          <Text>
            Category: <Badge color="red">{recipe.category}</Badge>
          </Text>
          <Text>
            Area: <Badge color="gray">{recipe.area}</Badge>
          </Text>
          {recipe.tags && <Badge color="grape">{recipe.tags}</Badge>}
          <Title order={4}>Instructions</Title>
          <Text size="md">{recipe.instructions}</Text>
        </>
      )}
    </Flex>
  );
};
