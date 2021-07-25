import { LocationOriginDetails } from "./types";
import { fetchData } from "../../utils/fetch";
import { restAPIs } from "../../utils/restAPIs";

export const getLocationAndOrigin = async (
  url: string
): Promise<LocationOriginDetails | undefined> => {
  if (!url) return;
  const response = await fetchData<LocationOriginDetails>(
    restAPIs.getLocationEpisodeOrigin(url)
  );
  return response;
};

export const getEpisodeDetails = async (urls: Array<string>) => {
  if (!urls?.length) return;
  const res: any = await Promise.all(
    urls.map(async (url) => {
      const response: any = await fetchData(
        restAPIs.getLocationEpisodeOrigin(url)
      );
      return response.name;
    })
  );
  return res;
};
