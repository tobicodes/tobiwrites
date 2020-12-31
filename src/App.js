import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import { Header } from "./Header";
import { EngineeringPage } from "./pages/Engineered";
import { HomePage } from "./pages/Home";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Header />
          <HomePage />
        </Route>
        <Route exact path="/spoken">
          <Header />
          <p>hey</p>
        </Route>
        <Route exact path="/engineered">
          <Header />
          <EngineeringPage />
        </Route>
        <Route exact path="/written">
          <Header />
          <p>hey</p>
        </Route>
        <Route exact path="/tech-ethics">
          <Header />
          <p>hey</p>
        </Route>
        <Route exact path="/faqs">
          <Header />
          <p>hey</p>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
