import moment from "moment";

const transformStatsToChartFormat = (groupedStats, mapProps, reduceProps) => {
  const chartFormatStats = groupedStats
    .map((statsForDay) =>
      statsForDay
        .map((stat) => {
          return {
            name: moment(stat.datetime).format("MM/DD/YY"),
            ticker: stat.ticker,
            ...Object.entries(mapProps)
              .map(([key, value]) => ({
                [key]: stat[value],
              }))
              .reduce((prev, cur) => ({ ...prev, ...cur })),
          };
        })
        .reduce(
          (prev, cur) => ({
            ...prev,
            name: cur.name,
            ...Object.entries(reduceProps)
              .map(([key, value]) => ({
                [key]: cur[value],
              }))
              .reduce((prev, cur) => ({ ...prev, ...cur })),
          }),
          {}
        )
    )
    .sort((stat1, stat2) => moment(stat1.name) - moment(stat2.name));

  return chartFormatStats;
};

export const getStatsForTicker = ({ groupedStats, ticker }) => {
  if (!ticker || !groupedStats) {
    return null;
  }

  const statsGroupedByDayFilteredByTicker = Object.values(groupedStats)
    .map((statsForDay) => statsForDay.filter((stat) => stat.ticker === ticker))
    .filter((statsForDay) => statsForDay.length > 0);

  const coinAmounts = transformStatsToChartFormat(
    statsGroupedByDayFilteredByTicker,
    {
      actualCoinAmount: "actual_coin_amount",
      comparisonCoinAmount: "comparison_coin_amount",
    },
    {
      [`${ticker}Actual`]: "actualCoinAmount",
      [`${ticker}Comparison`]: "comparisonCoinAmount",
    }
  );

  const dollarsSpent = transformStatsToChartFormat(
    statsGroupedByDayFilteredByTicker,
    {
      totalSpend: "total_spend",
    },
    {
      [`${ticker}TotalSpend`]: "totalSpend",
    }
  );

  const marketPrice = transformStatsToChartFormat(
    statsGroupedByDayFilteredByTicker,
    {
      currentPrice: "current_price",
    },
    {
      [`${ticker}CurrentPrice`]: "currentPrice",
    }
  );

  const coinsPurchased = transformStatsToChartFormat(
    statsGroupedByDayFilteredByTicker,
    {
      actualCoinAmount: "actual_coin_amount",
    },
    {
      [`${ticker}CoinAmount`]: "actualCoinAmount",
    }
  );

  const dcaComparisonAveragePrice = transformStatsToChartFormat(
    statsGroupedByDayFilteredByTicker,
    {
      averageDcaPrice: "average_dca_price",
    },
    {
      [`${ticker}AverageDcaPrice`]: "averageDcaPrice",
    }
  );

  const savingsPercentages = transformStatsToChartFormat(
    statsGroupedByDayFilteredByTicker,
    {
      savings: "savings_percent",
    },
    {
      [ticker]: "savings",
    }
  );

  const totalSpend =
    Math.round(dollarsSpent[dollarsSpent.length - 1][`${ticker}TotalSpend`]);

  const totalCoinsPurchased =
    coinsPurchased[coinsPurchased.length - 1][`${ticker}CoinAmount`];

  const limitStrategyPrice = Math.round(totalSpend / totalCoinsPurchased);
  const dcaComparisonPrice =
    Math.round(dcaComparisonAveragePrice[dcaComparisonAveragePrice.length - 1][
      `${ticker}AverageDcaPrice`
    ]);

  const latestPrice = parseFloat(
    marketPrice[marketPrice.length - 1][`${ticker}CurrentPrice`]
  );
  const dcaComparisonCoinValue =
    Math.round(coinAmounts[coinAmounts.length - 1][`${ticker}Comparison`] * latestPrice);
  const actualCoinValue =
    Math.round(coinAmounts[coinAmounts.length - 1][`${ticker}Actual`] * latestPrice);

  const lastUpdated = moment(
    statsGroupedByDayFilteredByTicker[
      statsGroupedByDayFilteredByTicker.length - 1
    ].datetime
  );
  const nextUpdate = moment(lastUpdated).add(24, "hours");

  const hoursUntilUpdate = moment.duration(nextUpdate.diff(moment())).asHours();

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
    ticker,
    savingsPercentages,
    hoursUntilUpdate,
  };
};
