import styles from "./index.module.css"; // Import your CSS module
import { Movie } from "../../types/index";

const MovieCard = (props: Movie) => {
  const { title, image, genre, cast, director, description } = props;

  return (
    <div className={styles.movieCard}>
      <div>
        <img
          className={styles.movieImage}
          src={"https://image.tmdb.org/t/p/w1280/" + image}
          alt={title}
        />
      </div>
      <div className={styles.movieInfo}>
        <h3 className={styles.movieTitle}>{title}</h3>
        <p className={styles.movieGenre}>Genre: {genre.join(", ")}</p>
        <p className={styles.movieCast}>
          Cast:{" "}
          {cast.map((actor) => (
            <span key={actor}>{actor}, </span>
          ))}
        </p>
        <p className={styles.movieDirector}>Director: {director}</p>
        <p className={styles.movieDescription}>{description}</p>
      </div>
    </div>
  );
};

export default MovieCard;
