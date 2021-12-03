import { API_URLS, ENV } from "../App";

export const getPrices = (tickers = ["btcusd", "ethusd"]) => {
  return Promise.all(
    tickers.map((ticker) => {
      return fetch(`${API_URLS.getPrice[ENV]}?ticker=${ticker}`)
        .then((res) => res.json())
        .then(
          (result) => {
            return { ticker: ticker, result };
          },
          (error) => {
            console.error(error);
          }
        );
    })
  ).then((result) => {
    const prices = Object.values(result);
    let pricesObj = {};
    // eslint-disable-next-line array-callback-return
    prices?.map((ticker) => {
      if (!prices[ticker.ticker]){
        prices[ticker.ticker] = 0;
      }
      pricesObj[ticker.ticker] = ticker.result;
    });
    return pricesObj;
  });
};
