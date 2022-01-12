import { Text } from "rebass";

export const About = () => {
  return (
    <>
      <Text textAlign="left" ml="2" mb="2">
        Hi, I'm the dashboard for an asset-buying robot.
      </Text>

      <Text textAlign="left" ml="2" mb="2">
        The goal is to get the best price for a given asset by using a limit
        strategy:
        <li>place limit orders at several intervals below the current price</li>
        <li>
          these orders get triggered automatically if the price drops to that
          level
        </li>
        <li>
          if an order gets executed or cancelled, start again
        </li>
      </Text>

      <Text textAlign="left" ml="2">
        <a
          target="_blank"
          href="https://github.com/samjhill/dashboard-limit-bot"
        >
          Github
        </a>
      </Text>
    </>
  );
};
