import moment from "moment";

export const getStatsForTicker = ({ groupedStats, ticker }) => {
  if (!ticker || !groupedStats) {
    return null;
  }
  
  const coinAmounts = Object.values(groupedStats)
    .map((statsForDay) =>
      statsForDay
        .map((stat) => ({
          name: moment(stat.datetime).format("MM/DD/YY"),
          actualCoinAmount: stat.actual_coin_amount,
          comparisonCoinAmount: stat.comparison_coin_amount,
          ticker: stat.ticker,
        }))
        .reduce(
          (prev, cur) => ({
            ...prev,
            name: cur.name,
            [`${cur.ticker}Actual`]: cur.actualCoinAmount,
            [`${cur.ticker}Comparison`]: cur.comparisonCoinAmount,
          }),
          {}
        )
    )
    .sort((stat1, stat2) => moment(stat1.name) - moment(stat2.name));

  const dollarsSpent = Object.values(groupedStats)
    .map((statsForDay) =>
      statsForDay
        .map((stat) => ({
          name: moment(stat.datetime).format("MM/DD/YY"),
          totalSpend: stat.total_spend,
          ticker: stat.ticker,
        }))
        .reduce(
          (prev, cur) => ({
            ...prev,
            name: cur.name,
            [`${cur.ticker}TotalSpend`]: cur.totalSpend,
          }),
          {}
        )
    )
    .sort((stat1, stat2) => moment(stat1.name) - moment(stat2.name));

  const marketPrice = Object.values(groupedStats)
    .map((statsForDay) =>
      statsForDay
        .map((stat) => ({
          name: moment(stat.datetime).format("MM/DD/YY"),
          currentPrice: stat.current_price,
          ticker: stat.ticker,
        }))
        .reduce(
          (prev, cur) => ({
            ...prev,
            name: cur.name,
            [`${cur.ticker}CurrentPrice`]: cur.currentPrice,
          }),
          {}
        )
    )
    .sort((stat1, stat2) => moment(stat1.name) - moment(stat2.name));

  const coinsPurchased = Object.values(groupedStats)
    .map((statsForDay) =>
      statsForDay
        .map((stat) => ({
          name: moment(stat.datetime).format("MM/DD/YY"),
          actualCoinAmount: stat.actual_coin_amount,
          ticker: stat.ticker,
        }))
        .reduce(
          (prev, cur) => ({
            ...prev,
            name: cur.name,
            [`${cur.ticker}CoinAmount`]: cur.actualCoinAmount,
          }),
          {}
        )
    )
    .sort((stat1, stat2) => moment(stat1.name) - moment(stat2.name));

  const dcaComparisonAveragePrice = Object.values(groupedStats)
    .map((statsForDay) =>
      statsForDay
        .map((stat) => ({
          name: moment(stat.datetime).format("MM/DD/YY"),
          averageDcaPrice: stat.average_dca_price,
          ticker: stat.ticker,
        }))
        .reduce(
          (prev, cur) => ({
            ...prev,
            name: cur.name,
            [`${cur.ticker}AverageDcaPrice`]: cur.averageDcaPrice,
          }),
          {}
        )
    )
    .sort((stat1, stat2) => moment(stat1.name) - moment(stat2.name));

  const totalSpend =
    dollarsSpent[dollarsSpent.length - 1][`${ticker}TotalSpend`];

  const totalCoinsPurchased =
    coinsPurchased[coinsPurchased.length - 1][`${ticker}CoinAmount`];

  const limitStrategyPrice = Math.round(totalSpend / totalCoinsPurchased);
  const dcaComparisonPrice =
    dcaComparisonAveragePrice[dcaComparisonAveragePrice.length - 1][
      `${ticker}AverageDcaPrice`
    ];

  const latestPrice = parseFloat(
    marketPrice[marketPrice.length - 1][`${ticker}CurrentPrice`]
  );
  const dcaComparisonCoinValue =
    coinAmounts[coinAmounts.length - 1][`${ticker}Comparison`] * latestPrice;
  const actualCoinValue =
    coinAmounts[coinAmounts.length - 1][`${ticker}Actual`] * latestPrice;

  return {
    coinAmounts,
    dollarsSpent,
    marketPrice,
    coinsPurchased,
    dcaComparisonAveragePrice,
    totalSpend,
    totalCoinsPurchased,
    limitStrategyPrice,
    dcaComparisonPrice,
    latestPrice,
    dcaComparisonCoinValue,
    actualCoinValue,
    ticker
  };
};
