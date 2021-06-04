import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "./container/Header";
import TeamDetail from "./container/TeamDetail";
import TeamListing from "./container/TeamListing";

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Switch>
          <Route path="/" exact component={TeamListing}></Route>
          <Route path="/team/:idTeam" exact component={TeamDetail}></Route>
          <Route>404 not found</Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
