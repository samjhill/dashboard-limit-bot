import { Text } from "rebass";

export const About = () => {
  return (
    <>
      <Text as="h1" textAlign="left" ml="2" mb="2">
        Buy the Dip Bot
      </Text>
      <Text textAlign="left" ml="2" mb="2">
        Hi, I'm the dashboard for an asset-buying robot.
      </Text>

      <Text as="h3" textAlign="left" ml="2" mb="2">
        The goal is to get the best price for a given asset by using a limit
        strategy:
        <ul>
          <li>
            place limit orders at several intervals below the current price
          </li>
          <li>
            these orders get triggered automatically if the price drops to that
            level
          </li>
          <li>if an order gets executed or cancelled, start again</li>
        </ul>
      </Text>
    </>
  );
};
