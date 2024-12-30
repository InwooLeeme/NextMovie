import { Suspense } from "react";
import MovieInfo from "../../../../components/Movie_Info";
import MoviePreview from "../../../../components/Movie_preview";
import Loader from "./Loading";

export default async function MovieDetail({ params }) {
  const { id } = await params;
  return (
    <div>
      <Suspense fallback={<Loader text={"movie"} />}>
        <MovieInfo id={id} />
      </Suspense>
      <Suspense fallback={<Loader text={"video"} />}>
        <MoviePreview id={id} />
      </Suspense>
    </div>
  );
}
