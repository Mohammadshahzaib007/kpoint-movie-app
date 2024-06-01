export interface Genera {
  id: number;
  name: string;
}

export interface GeneraAPIResponseType {
  genres: Genera[];
}

export interface Movie {
  title: string;
  image: string;
  genre: string[];
  cast: string[];
  director: string;
  description: string;
}

export interface RootStateType {
  genres: Genera[];
}
