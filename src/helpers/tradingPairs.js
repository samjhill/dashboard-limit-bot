import { API_URLS, ENV } from "../App";

export const getTradingPairs = () => {
  return fetch(`${API_URLS.getTradingPairs[ENV]}`)
    .then((res) => res.json())
    .then(
      (result) => {
        return result;
      },
      (error) => {
        console.error(error);
      }
    );
};
