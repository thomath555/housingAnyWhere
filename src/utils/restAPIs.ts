import { RequestMethodType } from "./types/enums";
import { BASE_URL } from '../config/constants'

export const restAPIs = {
  getAllCharacters: (page: Number = 1) => ({
    method: RequestMethodType.GET,
    endpoint: `${BASE_URL}/character?page=${page}`,
  }),
  getLocationEpisodeOrigin: (url: string) => ({
    method: RequestMethodType.GET,
    endpoint: url,
  }),
};
