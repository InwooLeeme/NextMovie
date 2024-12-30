import { Suspense } from "react";
import MovieInfo from "../../../../components/Movie_Info";
import MoviePreview from "../../../../components/Movie_Similar";
import Loader from "./Loading";
import styles from "../../../../styles/detail.module.css";

export default async function MovieDetail({ params }) {
  const { id } = await params;
  return (
    <div className={styles.container}>
      <Suspense fallback={<Loader text={"movie"} />}>
        <MovieInfo id={id} />
      </Suspense>
      <Suspense fallback={<Loader text={"video"} />}>
        <MoviePreview id={id} />
      </Suspense>
    </div>
  );
}
