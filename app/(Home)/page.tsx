import Link from "next/link";

import styles from "../../styles/homepage.module.css";
import Movie from "../../components/Movie";
import { API_URL } from "../const";

export const metadata = {
  title: "Home",
};

async function getMovies() {
  const response = await fetch(API_URL);
  const json = await response.json();
  return json;
}

export default async function HomePage() {
  const movies = await getMovies();
  return (
    <div className={styles.container}>
      {movies.map((movie) => (
        <Movie
          key={movie.id}
          id={movie.id.toString()}
          poster_path={movie.poster_path}
          title={movie.title}
        />
      ))}
    </div>
  );
}
