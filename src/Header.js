import React from "react";
import { Link } from "react-router-dom";
import { InternalNavLink } from "./helpers";

export const Header = () => {
  // TODO write styles into a css file

  return (
    <>
      <div
        className="header"
        // style={{
        //   margin: 0,
        //   padding: "2vw 4vw",
        //   display: "flex",
        //   flexWrap: "nowrap",
        //   //   flex: "1 0 67%",
        //   alignItems: "center",
        // }}
      >
        <Link to="/" style={{ textDecoration: "none" }}>
          {" "}
          <h1
            className="tobiOgunnaike"
            style={{
              fontSize: `calc((2 - 1) * 1.2vw + 1rem`, // squarespace does this
              color: "#000",
              lineHeight: "1.4em",
              margin: 0,
              //   display: "block",
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
          <InternalNavLink to="/"> home</InternalNavLink>
          <InternalNavLink to="/engineered"> eng</InternalNavLink>
          <InternalNavLink to="/tech-ethics"> tech ethics</InternalNavLink>
          <InternalNavLink to="/spoken"> spoken</InternalNavLink>
          <InternalNavLink to="/written"> written</InternalNavLink>
          <InternalNavLink to="/faqs">faqs</InternalNavLink>
        </div>
      </div>
    </>
  );
};
