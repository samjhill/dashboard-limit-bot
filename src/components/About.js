import { Text } from "rebass";

export const About = () => {
  return (
    <>
      <Text textAlign="left" ml="2" mb="2">
        Hi, I'm the dashboard for an asset-buying robot.
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
