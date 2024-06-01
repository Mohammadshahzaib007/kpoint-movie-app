import { createContext, useEffect, useMemo, useState } from "react";
import { Genera, GeneraAPIResponseType, RootStateType } from "../types";
import { BASE_URL } from "../contants";

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

  const [genres, setGenres] = useState<Genera[]>([]);

  const getGenres = async () => {
    const data = await fetch(`${BASE_URL}/genre/movie/list?api_key=${API_KEY}`);
    const response = (await data.json()) as GeneraAPIResponseType;
    setGenres(response.genres);
  };

  useEffect(() => {
    getGenres();
  }, []);

  const value: RootStateType = useMemo(() => {
    return {
      genres,
    };
  }, [genres]);

  return (
    <RootStateContext.Provider value={value}>
      {children}
    </RootStateContext.Provider>
  );
}

export default RootStateProvider;
