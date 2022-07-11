import { Col, Container, Row } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";
import FreeComponent from "./FreeComponent";
import AuthComponent from "./AuthComponent";
import Account from "./Account";

function App() {
  return (
    <Container>
      <Row>
        <Col>
          <h1>React Authentication Tutorial</h1>
          <section id="navigation">
            <a href="/">Home</a>
            <a href="/free">Free component</a>
            <a href="/auth">Auth component</a>
          </section>
        </Col>
      </Row>
      <Routes>
        <Route path="/" component={Account} />
        <Route path="/free" component={FreeComponent} />
        <Route path="/auth" component={AuthComponent} />
      </Routes>
    </Container>
  );
}

export default App;
