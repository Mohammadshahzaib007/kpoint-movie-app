export default interface Genera {
  id: number;
  name: string;
}

export default interface Movie {
  title: string;
  image: string;
  genre: string[];
  cast: string[];
  director: string;
  description: string;
}
