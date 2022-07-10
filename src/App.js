import { Col, Container, Row } from "react-bootstrap";
import Register from "./Register";

function App() {
  return (
    <Container>
      <Row>
        <Col md={6} lg={6}>
          <Register />
        </Col>
        <Col md={6} lg={6}></Col>
      </Row>
    </Container>
  );
}

export default App;
