import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { PageHeader, Menu, Row, Col } from "antd";
import "./App.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/spoken">
          <p>hey</p>
        </Route>
        <Route exact path="/engineered">
          <p>hey</p>
        </Route>
        <Route exact path="/written">
          <p>hey</p>
        </Route>
        <Route exact path="/tech-ethics">
          <p>hey</p>
        </Route>
        <Route path="*">
          <Header />
          <HomeContent />
        </Route>
      </Switch>
    </Router>
  );
}

const HomeContent = ({}) => {
  return (
    <div className="homeMainContent">
      <HeaderText>Hey I'm Tobi</HeaderText>

      <p>
        I’m a Software Engineer who builds delightful web products at Pinterest.
        I’m serving as a Cohort Leader for this{" "}
        <ExternalLink href="#">Stanford course</ExternalLink> for tech
        professionals in 2021. I’ve spoken at{" "}
        <ExternalLink href="#">tech conferences</ExternalLink> about software
        delivery. And when sufficiently caffeinated and motivated, I write{" "}
        <ExternalLink href="#">somewhat poetic things</ExternalLink> on the
        internet.{" "}
      </p>

      <p>
        If I’ve managed to intrigue you with that paragraph, stay here a little
        while. There are occasional nuggets of good stuff here. Here's a recent
        one.
      </p>
    </div>
  );
};

const Header = () => {
  // TODO write this in a css file
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
        <h1
          style={{
            // float: "left", // textAlign?
            fontSize: `calc((2 - 1) * 1.2vw + 1rem`, // squarespace does this
            color: "#000",
            lineHeight: "1.4em",
            margin: 0,
            // fontFamily: "aktiv-grotesk",
          }}
        >
          tobi ogunnaike
        </h1>
        <div
          className="navListContainer"
          style={{
            marginLeft: "auto",
            paddingLeft: "2vw",
            textAlign: "right",
            // width: "1000px",
          }}
        >
          <InternalLink to="/"> home</InternalLink>
          <InternalLink to="/engineered"> engineered</InternalLink>
          <InternalLink to="/spoken"> spoken</InternalLink>
          <InternalLink to="/tech-ethics"> tech ethics</InternalLink>
          <InternalLink to="#"> written</InternalLink>
          <InternalLink to="#">faqs</InternalLink>
        </div>
      </div>
    </>
  );
};

/* <span style={{ fontSize: `calc(0vw + 1rem)` }}>hello </span> */

const InternalLink = ({ to, children }) => {
  // TODO use Link component
  return (
    <Link
      to={to}
      style={{
        color: "#000",
        fontSize: `calc(0vw + 1rem)`,
        padding: "1em",
        textDecoration: "none",
      }}
    >
      {children}
    </Link>
  );
};

const ExternalLink = ({ href, children }) => {
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
      rel="noopener"
    >
      {children}
    </a>
  );
};

const HeaderText = ({ children, size = "md" }) => {
  // TODO use size to determine css className and put this in some util folder
  return (
    <h1 style={{ fontWeight: "700", fontSize: "54px", marginBottom: "32px" }}>
      {children}
    </h1>
  );
};

export default App;
