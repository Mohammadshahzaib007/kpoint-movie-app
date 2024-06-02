import {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import {
  Genera,
  GeneraAPIResponseType,
  MoviesResponseType,
  RootStateType,
  YearWiseMoviesTypes,
} from "../types";
import { BASE_URL } from "../contants";
import useBottomScrollListener from "../hooks/use-bottom-scroll-listener";

// needs to moved in .env file
const API_KEY = "6515b23812ca7dab83ed7195e34625d1";

export const RootStateContext = createContext<RootStateType>(
  {} as RootStateType
);

type PropTypes = {
  children: React.ReactNode;
};
function RootStateProvider(props: PropTypes) {
  const { children } = props;

  const isBottom = useBottomScrollListener();

  const [genres, setGenres] = useState<Genera[]>([]);
  const [movies, setMovies] = useState<YearWiseMoviesTypes[]>([]);
  const [selectedGenre, setSelectedGenre] = useState<number[]>([]);
  const [year, setYear] = useState<number>(2012);

  const getGenres = async () => {
    const data = await fetch(`${BASE_URL}/genre/movie/list?api_key=${API_KEY}`);
    const response = (await data.json()) as GeneraAPIResponseType;
    setGenres(response.genres);
  };

  const getMovies = useCallback(async () => {
    const data = await fetch(
      `${BASE_URL}/discover/movie?api_key=${API_KEY}&sort_by=popularity.desc&primary_release_year=${year}&page=1&vote_count.gte=100&with_genres=${selectedGenre.join(
        ","
      )}`
    );
    const response = (await data.json()) as MoviesResponseType;
    setMovies((prevState) => [
      ...prevState,
      { year, movies: response.results! },
    ]);
  }, [selectedGenre, year]);

  const genereSelectHandler = (id: number) => {
    setSelectedGenre((prevState) => [...prevState, id]);
  };

  const genereUnselectHandler = (_id: number) => {
    setSelectedGenre((prevState) => prevState.filter((id) => id !== _id));
  };

  const onPillClickHandler = useCallback(
    (id: number) => {
      if (selectedGenre.includes(id)) {
        genereUnselectHandler(id);
      } else {
        genereSelectHandler(id);
      }
    },
    [selectedGenre]
  );

  // Effects
  useEffect(() => {
    getGenres();
  }, []);

  useEffect(() => {
    getMovies();
  }, [getMovies]);

  useEffect(() => {
    const currentYear = new Date().getFullYear();
    if (year === currentYear) return;
    if (!isBottom) return;
    setYear((prevState) => prevState + 1);
  }, [isBottom, year]);

  const value: RootStateType = useMemo(() => {
    return {
      genres,
      movies,
      selectedGenre,
      onPillClickHandler,
    };
  }, [genres, movies, onPillClickHandler, selectedGenre]);

  return (
    <RootStateContext.Provider value={value}>
      {children}
    </RootStateContext.Provider>
  );
}

export default RootStateProvider;
