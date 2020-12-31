import React from "react";
import { HeaderText, ExternalLink, Text } from "../helpers";

export const HomePage = () => {
  return (
    <div className="homeMainContent">
      <HeaderText>Hey I'm Tobi</HeaderText>

      <Text>
        {" "}
        I’m a Software Engineer who builds delightful web products at Pinterest.
        I’m serving as a Cohort Leader for this{" "}
        <ExternalLink href="#">Stanford course</ExternalLink> for tech
        professionals in 2021. I’ve spoken at{" "}
        <ExternalLink href="#">tech conferences</ExternalLink> about software
        delivery. And when sufficiently caffeinated and motivated, I write{" "}
        <ExternalLink href="#">somewhat poetic things</ExternalLink> on the
        internet.{" "}
      </Text>

      <Text>
        If I’ve managed to intrigue you with that paragraph, stay here a little
        while. There are occasional nuggets of good stuff here. Here's a recent
        one.
      </Text>
    </div>
  );
};
