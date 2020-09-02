import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./Header";
import Container from "./Container";


const RoApp = () => (
  <Router>
    <div>
      <Header/>
      <Container/>
    </div>
  </Router>
);


export default RoApp;
