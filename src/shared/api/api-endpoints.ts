export const apiEndpoints = {
  search: {
    endpoint: "search.php",
    params: { byName: "s", byFirstLetter: "f" },
  },
  lookup: { endpoint: "lookup.php", params: { detailsById: "i" } },
  random: { endpoint: "random.php" },
  categories: { endpoint: "categories.php" },
  filter: {
    endpoint: "filter.php",
    params: { byMainIngredient: "i", byCategory: "c", byArea: "a" },
  },
  list: {
    endpoint: "list.php",
    params: { categories: "c", area: "a", ingredients: "i" },
  },
};
