import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import axios from "axios";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [register, setRegister] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();

    // Set configurations for axios to connect the frontend to backend
    const configuration = {
      method: "post",
      url: "https://auth-app-node-mongodb.herokuapp.com/register",
      data: {
        email,
        password,
      },
    };

    axios(configuration)
      .then(result => {
        setRegister(true);
      })
      .catch(error => {
        error = new Error();
      });
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
            type="password"
            name="password"
            value={password}
            placeholder="********"
            onChange={e => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" type="submit" onClick={e => handleSubmit(e)}>
          Submit
        </Button>
        {register ? (
          <p className="alert-success mt-2  p-2 border border-success rounded">
            You are registered successfully.
          </p>
        ) : (
          <p className="alert-danger mt-2 p-2 border border-danger rounded">
            You are not registered.
          </p>
        )}
      </Form>
    </>
  );
}
