import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

import {
  StartPage,
  CharSelection,
  PointsDistribution,
  Infos,
  Help
} from "./pages";

const useStyles = makeStyles(theme => ({
  root: {
    backgroundImage: `url(https://i.pinimg.com/originals/8b/55/cf/8b55cf654c0e6f4bfdf0ddf0d167f2a2.jpg)`,
    width: 1280,
    height: 720,
    borderRadius: 6,
    boxShadow:
      "rgba(0, 0, 0, 0.2) 0px 3px 3px -2px, rgba(0, 0, 0, 0.14) 0px 3px 4px 0px, rgba(0, 0, 0, 0.12) 0px 1px 8px 0px",
    marginTop: theme.spacing(5),
    padding: 24
  }
}));

export default function App() {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <Router>
        <Switch>
          <Route exact path="/">
            <StartPage />
          </Route>
          <Route path="/char">
            <CharSelection />
          </Route>
          <Route path="/points">
            <PointsDistribution />
          </Route>
          <Route path="/infos">
            <Infos />
          </Route>
          <Route path="/help">
            <Help />
          </Route>
        </Switch>
      </Router>
    </Container>
  );
}
