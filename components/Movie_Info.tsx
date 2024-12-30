import { API_URL } from "../app/(Home)/page";

async function getMovieInfo(id: string) {
  const response = await fetch(`${API_URL}/${id}/credits`);
  return response.json();
}

export default async function MovieInfo({ id }: { id: string }) {
  const movieInfo = await getMovieInfo(id);
  return <h4>{JSON.stringify(movieInfo)}</h4>;
}
