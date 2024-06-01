import { useContext } from "react";
import Container from "../../component/container";
import MovieCard from "../../component/movie-card";
import styles from "./index.module.css";
import { RootStateContext } from "../../state/provider";

function HomePage() {
  const { movies } = useContext(RootStateContext);

  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.cardContainer}>
          <h1 className={styles.title}>2012 </h1>
          {movies?.map((movie) => (
            <MovieCard
              key={movie.id}
              title={movie.original_title}
              image={movie.backdrop_path}
              genre={movie.genre_ids!}
              cast={["Not available"]}
              director={"Not available"}
              description={movie.overview}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}

export default HomePage;
