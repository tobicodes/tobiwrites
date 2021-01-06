import React, { useState, useEffect } from "react";
import { HeaderText, ExternalLink, InternalLink, Text } from "../helpers";
import { InternalNavLink } from "../helpers";

const isMobileDevice = () => {
  const limit = 480; // double check this
  // screen.width <= 480
  return window.innerWidth <= limit;
};

export const HomePage = () => {
  const [isMobile, setIsMobile] = useState(isMobileDevice());
  // const isMobile = isMobileDevice();

  useEffect(() => {
    setIsMobile();
  }, [window.innerWidth, setIsMobile]);
  return (
    <div className="contentContainer">
      {/* <HeaderText>Hey I'm Tobi</HeaderText> */}
      <h1 className="contentHeader">Hey I'm Tobi</h1>

      <Text>
        {" "}
        I’m a Software Engineer who builds delightful web products at Pinterest.
        I’m serving as a Cohort Leader for this{" "}
        <ExternalLink href="#">Stanford course</ExternalLink> for tech
        professionals in 2021. I’ve spoken at{" "}
        <InternalLink href="/spoken">tech conferences</InternalLink> about
        software delivery. And when sufficiently caffeinated and motivated, I
        write <ExternalLink href="#">somewhat poetic things</ExternalLink> on
        the internet.{" "}
      </Text>

      <Text>
        If I’ve managed to intrigue you with that paragraph, stay here a little
        while. There are occasional nuggets of good stuff here. Here's a recent
        one.
      </Text>
      {isMobile ? <AMP /> : "not mobile"}
    </div>
  );
};

const AMP = () => {
  console.log("MOBILE OOO");
  return (
    <div
      // className="navListContainer"
      style={{
        marginLeft: "auto",
        paddingLeft: "2vw",
        textAlign: "center",
      }}
    >
      <InternalNavLink to="/engineered"> eng</InternalNavLink>
      <InternalNavLink to="/tech-ethics"> tech ethics</InternalNavLink>
      <InternalNavLink to="/spoken"> spoken</InternalNavLink>
      <InternalNavLink to="/written"> written</InternalNavLink>
      <InternalNavLink to="/faqs">faqs</InternalNavLink>
    </div>
  );
};
