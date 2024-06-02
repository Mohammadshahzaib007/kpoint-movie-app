import Container from "../../component/container";
import MovieCard from "../../component/movie-card";
import styles from "./index.module.css";
import useRootStateContext from "../../state/useRootStateContext";
import React from "react";

function HomePage() {
  const { movies } = useRootStateContext();

  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.cardContainer}>
          {movies?.map((data, idx) => (
            <React.Fragment key={data.year + "-" + idx}>
              <h1 className={styles.title}>{data.year} </h1>
              {data.movies?.map((movie) => (
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
              <br />
            </React.Fragment>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default HomePage;
