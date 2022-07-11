// What is going on in the `ProtectedRoutes` component?

// This is like a template. What changes is the condition on which the `ProtectedRoutes` component is based. In this case, it is based on the `token` received from the `cookie` upon login. So in another application, the condition may be different.

// This is what is going on here: The `ProtectedRoutes` component receives a component and then decides if the component should be returned to the user or not.

// To make this decision, it checks if there is a valid `token` (token is set upon a successful login) coming from the `cookie`. If the `token` is undefined, then it redirects to the default path (the landing page in this case).

import React from "react";
import { Route, Redirect } from "react-router-dom";

// Receives component and any other props represented by ...rest
export default function ProtectedRoutes() {
  return (
    // This route takes other routes assigned to it from the App.js
    // and returns the same route if condition is met
    <Route
      {...rest}
      render={props => {
        // Get cookie from browser if logged in
        const token = cookies.get("TOKEN");

        if (token) {
          // Return route if there is a valid token set in the cookie
          return <Component {...props} />;
        } else {
          return (
            // Return the user to the landing page if there is no valid token set
            <Redirect
              to={{
                pathname: "/",
                state: {
                  // Sets the location a user was about to access before being redirected to login
                  from: props.location,
                },
              }}
            />
          );
        }
      }}
    />
  );
}
