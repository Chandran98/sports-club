import { jwtDecode } from 'jwt-decode';
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import tokenexpired from "./utils/tokenexpired";

const PrivateRoute = ({ component: Component, ...rest }) => {
 
console.log("tokenexpired",tokenexpired())
  return (
    <Route
      {...rest}
      render={(props) =>
        tokenexpired() ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" /> // Redirect to login if no token
        )
      }
    />
  );
};

export default PrivateRoute;
