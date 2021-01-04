import React from "react";
import { Link } from "react-router-dom";
import { InternalLink } from "./helpers";

export const Header = () => {
  // TODO write styles into a css file

  return (
    <>
      <div
        style={{
          margin: 0,
          padding: "2vw 4vw",
          display: "flex",
          flexWrap: "nowrap",
          // flex: "1 0 67%",
          alignItems: "center",
        }}
      >
        <Link to="/" style={{ textDecoration: "none" }}>
          {" "}
          <h1
            style={{
              fontSize: `calc((2 - 1) * 1.2vw + 1rem`, // squarespace does this
              color: "#000",
              lineHeight: "1.4em",
              margin: 0,
            }}
          >
            tobi ogunnaike
          </h1>
        </Link>

        <div
          className="navListContainer"
          style={{
            marginLeft: "auto",
            paddingLeft: "2vw",
            textAlign: "right",
          }}
        >
          <InternalLink to="/"> home</InternalLink>
          <InternalLink to="/engineered"> engineered</InternalLink>
          <InternalLink to="/tech-ethics"> tech ethics</InternalLink>
          <InternalLink to="/spoken"> spoken</InternalLink>

          <InternalLink to="/written"> written</InternalLink>
          <InternalLink to="/faqs">faqs</InternalLink>
        </div>
      </div>
    </>
  );
};
