import React, { useState } from "react";
import Mailchimp from "react-mailchimp-form";
import { Box, Text } from "rebass";

export const MailingList = () => {
  return (
    <Box pb="2">
      <Text mt="2">Feel free to sign up for more information.</Text>
      <Text mb="2">I promise I won't spam you!</Text>
      <Mailchimp
        action="https://flamingochurch.us5.list-manage.com/subscribe/post?u=6ebe0b4af973c20b095e1eb03&amp;id=f896297f9e"
        fields={[
          {
            name: "EMAIL",
            placeholder: "Email",
            type: "email",
            required: true,
          },
        ]}
      />
    </Box>
  );
};
