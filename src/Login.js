import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import axios from "axios";
import Cookies from "universal-cookie";

const cookies = new Cookies();

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login, setLogin] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();

    const configuration = {
      method: "post",
      url: "https://auth-app-node-mongodb.herokuapp.com/login",
      data: {
        email,
        password,
      },
    };

    axios(configuration)
      .then(result => {
        setLogin(true);
        // Set the cookie
        cookies.set("TOKEN", result.data.token, {
          // Makes the cookie available in all the pages
          path: "/",
        });
        // Redirect users to the auth page
        window.location.href = "/auth";
      })
      .catch(error => {
        error = new Error();
      });
  };

  return (
    <>
      <h2>Login</h2>
      <Form onSubmit={e => handleSubmit(e)}>
        <Form.Group className="mb-3" controlId="loginEmail">
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={email}
            placeholder="Enter email"
            onChange={e => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="loginPassword">
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
        {login ? (
          <p className="alert-success mt-2  p-2 border border-success rounded">
            You are logged in successfully.
          </p>
        ) : (
          <p className="alert-danger mt-2 p-2 border border-danger rounded">
            You are not logged in.
          </p>
        )}
      </Form>
    </>
  );
}
