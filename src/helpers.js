import { NavLink } from "react-router-dom";

// use for navigation within our site

export const InternalLink = ({ to, children }) => {
  return (
    <NavLink
      exact={true}
      to={to}
      activeStyle={{
        fontWeight: "bold",
        color: "red", // tomato
      }}
      style={{
        color: "#000",
        fontSize: `calc(0vw + 1rem)`,
        padding: "1em",
        textDecoration: "none",
      }}
    >
      {children}
    </NavLink>
  );
};

export const ExternalLink = ({ href, children }) => {
  return (
    <a
      style={{
        // color: "#f78978",
        // color: "#DE705F",
        color: "chocolate",
        fontSize: `calc(0vw + 1rem)`,
        textDecoration: "underline",
      }}
      className="tbd"
      href={href}
      target="_blank"
      rel="noreferrer"
    >
      {children}
    </a>
  );
};

export const HeaderText = ({ children, size = "md", textAlign = "center" }) => {
  // TODO use size to determine css className and put this in some util folder
  return (
    <h1
      style={{
        fontWeight: "700",
        fontSize: "54px",
        marginBottom: "32px",
        textAlign: textAlign,
      }}
    >
      {children}
    </h1>
  );
};
