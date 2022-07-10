import { useState } from "react";
import { Button, Form } from "react-bootstrap";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [register, setRegister] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();
    alert("submitted");
  };

  return (
    <>
      <h2>Register</h2>
      <Form onSubmit={e => handleSubmit(e)}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={email}
            placeholder="Enter email"
            onChange={e => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="text"
            name="password"
            value={password}
            placeholder="********"
            onChange={e => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" type="submit" onClick={e => handleSubmit(e)}>
          Submit
        </Button>
      </Form>
    </>
  );
}
