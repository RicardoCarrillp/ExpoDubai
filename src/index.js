
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

// styles

import "bootstrap/scss/bootstrap.scss";
import "assets/scss/paper-kit.scss?v=1.3.0";
import "assets/demo/demo.css?v=1.3.0";
// pages
import Index from "views/Index.js";
import Home from "views/Home.js";
import AboutTeam from "views/aboutTeam.js";
import AboutUtb from "views/aboutUtb.js";
import AboutCtg from "views/aboutCtg.js";
import UtbAtG from "views/utbAtG.js";
import Quiz from "views/quiz.js";
import InternacionalCoop from "views/internacionalCoop.js";
import ProgramFF from "views/programFF.js";
import NucleoIcons from "views/NucleoIcons.js";
import LandingPage from "views/examples/LandingPage.js";
import ProfilePage from "views/examples/ProfilePage.js";
import RegisterPage from "views/examples/RegisterPage.js";
// others

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/home" render={(props) => <Home {...props} />} />
      <Route path="/indexpaper" render={(props) => <Index {...props} />} />
      <Route path="/aboututb" render={(props) => <AboutUtb {...props} />} />
      <Route path="/aboutctg" render={(props) => <AboutCtg {...props} />} />
      <Route path="/quiz" render={(props) => <Quiz {...props} />} />
      <Route path="/utbatglance" render={(props) => <UtbAtG {...props} />} />
      <Route path="/programff" render={(props) => <ProgramFF {...props} />} />
      <Route path="/intenacionalcoop" render={(props) => <InternacionalCoop {...props} />} />
      <Route path="/aboutteam" render={(props) => <AboutTeam {...props} />} />
      <Route
        path="/nucleo-icons"
        render={(props) => <NucleoIcons {...props} />}
      />
      {/* <Route
        path="/landing-page"
        render={(props) => <LandingPage {...props} />}
      /> */}
      {/* <Route
        path="/profile-page"
        render={(props) => <ProfilePage {...props} />}
      />
      <Route
        path="/register-page"
        render={(props) => <RegisterPage {...props} />}
      /> */}
      <Redirect to="/home" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
