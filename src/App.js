import { Col, Container, Row } from "react-bootstrap";
import Register from "./Register";
import Login from "./Login";
import { Switch, Router } from "react-router-dom";
import FreeComponent from "./FreeComponent";
import AuthComponent from "./AuthComponent";

function App() {
  return (
    <Container>
      <Row></Row>
      <Switch>
        <Route exact path="/" component={Account} />
        <Route exact path="/free" component={FreeComponent} />
        <Route exact path="/auth" component={AuthComponent} />
      </Switch>
    </Container>
  );
}

export default App;
