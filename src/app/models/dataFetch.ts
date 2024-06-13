import { Character } from './chatacter';

export interface DataFetch {
  info: {
    count: number;
    pages: number;
    next: string | null;
    prev: null | string;
  };
  results: Character[];
}
