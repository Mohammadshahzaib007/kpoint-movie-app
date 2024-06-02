export interface Genera {
  id: number;
  name: string;
}

export interface GeneraAPIResponseType {
  genres: Genera[];
}

export interface MovieCardPropTypes {
  title: string;
  image: string;
  genre: number[];
  cast: string[];
  director: string;
  description: string;
}

export interface RootStateType {
  genres: Genera[];
  movies: MovieType[];
  selectedGenre: number[];
  onPillClickHandler: (id: number) => void;
}

export interface MoviesResponseType {
  page: number;
  results?: MovieType[] | null;
  total_pages: number;
  total_results: number;
}
export interface MovieType {
  adult: boolean;
  backdrop_path: string;
  genre_ids?: number[] | null;
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}
