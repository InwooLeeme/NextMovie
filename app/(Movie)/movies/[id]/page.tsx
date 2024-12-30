import { Suspense } from "react";
import MovieInfo, { getMovieInfo } from "../../../../components/Movie_Info";
import MovieVideos from "../../../../components/Movie_Similar";
import styles from "../../../../styles/detail.module.css";

export async function generateMetadata({
  params: { id },
}: {
  params: { id: string };
}) {
  const movie = await getMovieInfo(id);
  return {
    title: movie.title,
  };
}

export default async function MovieDetailPage({
  params: { id },
}: {
  params: { id: string };
}) {
  return (
    <div className={styles.container}>
      <Suspense fallback={<h1>Loading movie info</h1>}>
        <MovieInfo id={id} />
      </Suspense>
      <Suspense fallback={<h1>Loading movie videos</h1>}>
        <MovieVideos id={id} />
      </Suspense>
    </div>
  );
}

export const runtime = "edge";
