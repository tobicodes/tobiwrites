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

// use to navigate to other websites

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

// standard header text
export const HeaderText = ({ children, size = "md", textAlign = "center" }) => {
  // TODO use size to determine css className and put this in some util folder
  return (
    <h1
      style={{
        fontWeight: "700",
        fontSize: "54px",
        marginTop: "0",
        marginBottom: "32px",
        textAlign: textAlign,
      }}
    >
      {children}
    </h1>
  );
};

export const Text = ({ children, size = "lg", textAlign = "center" }) => {
  // TODO use css
  return (
    <p
      style={{
        fontSize: size === "lg" ? "16px" : "14px",
        textAlign: textAlign,
      }}
    >
      {children}
    </p>
  );
};
