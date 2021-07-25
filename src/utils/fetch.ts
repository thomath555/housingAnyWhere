import axios from "axios";
import { FetchRequestType } from "./types/globalTypes";

export const fetchData = async<T> (request: FetchRequestType) => {
  const { method, endpoint } = request;
  try {
    const response = await axios.request<T>({
      method,
      url: endpoint,
    });
    return response.data;
  } catch (e) {
    console.log(e);
  }
};
