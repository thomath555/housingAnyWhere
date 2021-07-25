import { RequestMethodType } from './enums';

export type FetchRequestType = {
  method: RequestMethodType;
  endpoint: string;
};

export type basicInfoType = {
  name: string;
  url: string;
}

export type singleCharacterType = {
  location: basicInfoType;
  name: string;
  created: string;
  species: string;
  status: string;
  type: string;
  url: string;
  gender: string;
  id: number;
  image: string;
  origin: basicInfoType;
  episode: Array<string>;
};
