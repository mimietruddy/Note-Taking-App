import React, { useContext } from "react";

import { Route, Redirect } from "react-router-dom";

import { AuthContext } from "../store/AuthContext";

const ProtectedRoute = ({ component: OurComponent, ...rest }) => {
  const { isLoggedIn } = useContext(AuthContext);
  return (
    <Route
      {...rest}
      render={(props) =>
        isLoggedIn ? (
          <OurComponent {...props} />
        ) : (
          <Redirect
            to={{ pathname: "/login", state: { from: props.location } }}
          />
        )
      }
    ></Route>
  );
};
export default ProtectedRoute;
