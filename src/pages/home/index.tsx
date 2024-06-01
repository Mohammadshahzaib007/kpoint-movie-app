import { useContext } from "react";
import Container from "../../component/container";
// import MovieCard from "../../component/movie-card";
import styles from "./index.module.css";
import { RootStateContext } from "../../state/provider";

//Note: The api key needs to be moved to .env

function HomePage() {
  const { genres } = useContext(RootStateContext);

  // const fetchData = async () => {
  //   const response = await fetch(
  //     `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&sort_by=popularity.desc&primary_release_year=2012&page=1&vote_count.gte=100`
  //   );
  //   const data = await response.json();
  //   setMovies(data.results);
  // };
  // console.log(movies);

  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.cardContainer}>
          <h1 className={styles.title}>2012 </h1>
          {/* {movies?.map((movie) => (
            <MovieCard
              key={movie.id}
              title={movie.original_title}
              image={movie.backdrop_path}
              genre={movie.genre_ids}
              cast={[]}
              // director={movie.}
              description={movie.overview}
            />
          ))} */}
        </div>
      </Container>
    </section>
  );
}

export default HomePage;
