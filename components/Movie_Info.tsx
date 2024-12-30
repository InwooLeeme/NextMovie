import { API_URL } from "../app/const";
import styles from "../styles/movie_info.module.css";

export async function getMovieInfo(id: string) {
  const response = await fetch(`${API_URL}/${id}`);
  const json = await response.json();
  return json;
}

export default async function MovieInfo({ id }: { id: string }) {
  const movie = await getMovieInfo(id);
  return (
    <div className={styles.container}>
      <img
        src={movie.poster_path}
        className={styles.poster}
        alt={movie.title}
      />
      <div className={styles.info}>
        <h1 className={styles.title}>{movie.title}</h1>
        <h3>⭐️ {movie.vote_average.toFixed()}</h3>
        <p>{movie.overview}</p>
        <a href={movie.homepage} target={"_blank"}>
          Homepage &rarr;
        </a>
      </div>
    </div>
  );
}
