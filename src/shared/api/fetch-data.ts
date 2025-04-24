const apiConfig = {
  baseUrl: "https://www.themealdb.com/api/json/v1/",
  apiKey: "1/",
};

// This VELOCIPED is kinda cool
export async function fetchData(endpoint: string, params: [string, string][]) {
  const { baseUrl, apiKey } = apiConfig;
  const url = new URL(apiKey, baseUrl);
  url.pathname += endpoint;

  params.forEach(([key, value]) => url.searchParams.append(key, value));

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(
        `Request failed: ${response.status} ${response.statusText}`,
      );
    }

    const body = await response.json();
    return body;
  } catch (e) {
    console.error(e);
  }
}
