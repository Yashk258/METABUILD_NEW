const API_URL = "http://localhost:5000/api/house/generate";

export async function getHouse() {
  const response = await fetch(API_URL);

  if (!response.ok) {
    throw new Error("Failed to fetch house layout");
  }

  return await response.json();
}