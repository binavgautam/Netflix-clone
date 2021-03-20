import React from "react";
import Jumbotron from "./Components/Jumbotron";
import Footer from "./Components/Footer";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function App() {
  return (
    <>
      <Jumbotron />
      <Footer />
    </>
  );
}
