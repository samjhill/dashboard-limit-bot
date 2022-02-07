import React from "react";

export const Backtest = () => {
  return <iframe src={process.env.PUBLIC_URL + "/bt.html"} title="backtest" width="100%" height="1000px" />;
};