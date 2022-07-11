import { Col, Container, Row } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";
import FreeComponent from "./FreeComponent";
import AuthComponent from "./AuthComponent";
import Account from "./Account";
import ProtectedRoutes from "./ProtectedRoutes";

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
        <Route path="/" element={<Account />} />
        <Route path="/free" element={<FreeComponent />} />
        <Route
          path="/auth"
          element={
            <ProtectedRoutes>
              <AuthComponent />
            </ProtectedRoutes>
          }
        />
      </Routes>
    </Container>
  );
}

export default App;
