import React, { Component } from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons';
import $ from 'jquery';
import Popper from 'popper.js';
import './App.css';
import Home from "./Home";
import Register from "./Register";
import Footer from "./Footer";
import Registerworker from "./Registerworker";
import Registercompany from "./Registercompany";
import Navbar from "./Navbar";
import Workerhome from "./worker/Workerhome";
import Workerindex from "./worker/Index";
import invitation from "./worker/invitation";
import { Switch, Route, Redirect, BrowserRouter, NavLink } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/registerworker" component={Registerworker} />
        <Route exact path="/registercompany" component={Registercompany} />
        <Route exact path="/Workerhome" component={Workerhome} />
        <Route exact path="/Worker" component={Workerindex} />
        <Route exact path="/invitations" component={invitation} />
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
