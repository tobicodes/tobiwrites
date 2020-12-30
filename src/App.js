import logo from "./logo.svg";
import { PageHeader, Menu, Row, Col } from "antd";
import "./App.css";

function App() {
  return (
    <div style={{ backgroundColor: "#fbf0e7", minHeight: "100vh" }}>
      <Header />
    </div>
  );
}

const Title = () => {};

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
          flex: "1 0 67%",
          alignItems: "center",
        }}
      >
        <h1
          style={{
            float: "left", // textAlign?
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
          style={{ paddingLeft: "2vw", textAlign: "right", width: "1000px" }}
        >
          <InternalLink to="#"> Helloooo</InternalLink>
          <InternalLink to="#"> Helloooo</InternalLink>
          <InternalLink to="#"> Helloooo</InternalLink>
          <InternalLink to="#"> Helloooo</InternalLink>
          <InternalLink to="#"> Helloooo</InternalLink>
          {/* <a href="#" target="_blank" rel="noopener">
            hey
          </a> */}
          {/* <span style={{ fontSize: `calc(0vw + 1rem)` }}>hello </span>
          <span style={{ fontSize: `calc(0vw + 1rem)` }}>hello </span>
          <span style={{ fontSize: `calc(0vw + 1rem)` }}>hello </span>
          <span style={{ fontSize: `calc(0vw + 1rem)` }}>hello </span> */}
        </div>
      </div>
      {/* <Menu mode="horizontal">
          <Menu.Item>Menu</Menu.Item>

          <Menu.Item>SubMenuItem</Menu.Item>
        </Menu> */}
    </>
  );
};

const InternalLink = ({ to, children }) => {
  return (
    <a
      style={{ color: "#000" }}
      className="tbd"
      href={to}
      target="_blank"
      rel="noopener"
    >
      {children}
    </a>
  );
};

export default App;
