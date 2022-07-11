import { useState, useEffect } from "react";
import axios from "axios";
import Cookies from "universal-cookie";
import { Button } from "react-bootstrap";

const cookies = new Cookies();
const token = cookies.get("TOKEN");

export default function AuthComponent() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    const configuration = {
      method: "get",
      url: "https://auth-app-node-mongodb.herokuapp.com/auth-endpoint",
      // auth-endpoint is a protected endpoint that is only accessible using an Authorization token.
      // So it is in the header that you specify the Authorization token.
      // Without this header, the API call will return a 403:Forbidden error.
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    axios(configuration)
      .then(result => {
        setMessage(result.data.message);
      })
      .catch(error => {
        error: new Error();
      });
  }, []);

  const logout = () => {
    // Destroy existing cookie
    cookies.remove("TOKEN", { path: "/" });
    // Redirect user to landing page
    window.location.href = "/";
  };

  return (
    <>
      <div>AuthComponent</div>
      <p className="alert-success p-2 border border-success rounded">
        {message}
      </p>
      <Button variant="danger" type="submit" onClick={() => logout()}>
        Log out
      </Button>
    </>
  );
}
