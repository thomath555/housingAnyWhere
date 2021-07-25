import { basicInfoType } from "../../utils/types/globalTypes";

export interface LocationOriginDetails {
  dimension: string;
  name: string;
  residents: Array<string>;
  type: string;
}

export type dataSetType = {
  locationDetails: any;
  originDetails: any;
  episodeList: Array<string>;
};

export type Props = {
  showModal: boolean;
  location: basicInfoType;
  name: string;
  origin: basicInfoType;
  episode: Array<string>;
  toggleModalHandler: () => void;
};
