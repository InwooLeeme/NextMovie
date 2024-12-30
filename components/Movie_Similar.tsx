import { API_URL } from "../app/(Home)/page";
import styles from "../styles/movie_perview.module.css";

async function getSimilarMovie(id: string) {
  const response = await fetch(`${API_URL}/${id}/similar`);
  const json = await response.json();
  return json;
}

export default async function Preview({ id }: { id: string }) {
  const similarMovie = await getSimilarMovie(id);
  return (
    <div className={styles.container}>
      {similarMovie.map((movie) => (
        <img
          className={styles.poster}
          key={movie.id}
          src={movie.poster_path}
          alt={movie.title}
        />
      ))}
    </div>
  );
}
