import { API_KEY } from "./secret"; // even though it is a cross dep, it's simply to mock .env

export const apiConfig = {
  baseUrl: "https://api.api-ninjas.com/v1/recipe",
  apiKey: API_KEY,
};

export async function fetchData(query: string) {
  const { baseUrl, apiKey } = apiConfig;
  const params = new URLSearchParams();
  params.append("query", query);

  const response = await fetch(`${baseUrl}?${params}`, {
    headers: {
      "X-Api-Key": apiKey,
    },
  });

  const body = await response.json();
  return body;
}
