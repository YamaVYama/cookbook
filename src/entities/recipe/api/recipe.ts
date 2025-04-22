import { fetchData } from "@shared/consts";

export async function fetchRecipe(search: string) {
  try {
    const data = await fetchData(search);
    return data;
  } catch (e) {
    console.error("There has been error in fetching recipe", { error: e });
  }
}
