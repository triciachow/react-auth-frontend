import { Row, Col } from "react-bootstrap";
import Register from "./Register";
import Login from "./Login";

export default function Account() {
  return (
    <Row>
      <Col md={6} lg={6}>
        <Register />
      </Col>
      <Col md={6} lg={6}>
        <Login />
      </Col>
    </Row>
  );
}
