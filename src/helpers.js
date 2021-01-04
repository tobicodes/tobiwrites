import { NavLink, Link } from "react-router-dom";
import "./helpers.css";

// NavLink for internal navigation, this also supports highlighting the currently active route

export const InternalNavLink = ({ to, children }) => {
  return (
    <NavLink
      className="navLinkStyle"
      exact={true}
      to={to}
      activeStyle={{
        fontWeight: "bold",
        color: "red", // tomato
      }}
    >
      {children}
    </NavLink>
  );
};

// regular link that is not in the navigation. useful for inline-linking to other rotues on page
export const InternalLink = ({ to, children }) => {
  return (
    <Link className="linkStyle" to={to}>
      {children}
    </Link>
  );
};

// use to navigate to other websites

export const ExternalLink = ({ href, children }) => {
  return (
    <a className="linkStyle" href={href} target="_blank" rel="noreferrer">
      {children}
    </a>
  );
};

// standard header text
export const HeaderText = ({ children, size = "md", textAlign = "center" }) => {
  // TODO use size to determine css className and put this in some util folder

  const fontSize = {
    sm: "24px",
    md: "54px",
    lg: "72px",
  };

  return (
    <h1
      style={{
        fontWeight: "700",
        fontSize: fontSize[size] ?? "54px",
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
