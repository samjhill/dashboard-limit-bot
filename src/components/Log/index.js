import { useEffect, useState } from "react";
import { Box, Text, Flex } from "rebass";
import { marked } from "marked";

export const Log = () => {
    const [markdown, setMarkdown] = useState();

    useEffect(() => {
      const readmePath = require("./entries/about-this-bot.md");

      if (!markdown) {
        fetch(readmePath)
            .then((response) => {
                return response.text();
            })
            .then((text) => {
                setMarkdown(marked(text));
            });
      }
    }, [setMarkdown, markdown]);
  return (
    <>
      <Text as="h1">Log</Text>
      {markdown}
    </>
  );
};
