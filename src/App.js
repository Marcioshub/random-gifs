import React from "react";
import { Jumbotron, Container, Row, Col } from "react-bootstrap";
import logo from "./images/giphy-logo.svg";
import "./App.css";

// components
import One from "./components/One";
import Two from "./components/Two";
import Three from "./components/Three";

function App() {
  return (
    <div className="App">
      <Jumbotron>
        <h1>Random GIFs</h1>
        <h4>Find random gifs to copy</h4>
        <h6>Powered by the giphy api</h6>
        <img src={logo} width={300} alt="logo" />
      </Jumbotron>
      <br />
      <Container className="mb-5">
        <Row>
          <Col>
            <One />
          </Col>
          <Col>
            <Two />
          </Col>
          <Col>
            <Three />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
