import { useState, useEffect } from "react";
import axios from "axios";

export default function FreeComponent() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    const configuration = {
      method: "get",
      url: "https://auth-app-node-mongodb.herokuapp.com/free-endpoint",
    };

    axios(configuration)
      .then(result => {
        setMessage(result.data.message);
      })
      .catch(error => {
        error = new Error();
      });
  }, []);

  return (
    <>
      <div>FreeComponent</div>
      <p className="alert-success p-2 border border-success rounded">
        {message}
      </p>
    </>
  );
}
