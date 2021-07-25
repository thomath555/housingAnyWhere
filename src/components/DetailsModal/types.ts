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

export type Props = {};
