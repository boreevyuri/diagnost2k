import React from "react";
import { Route, Navigate } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const PrivateRoute = ({ component: Component, auth, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      !auth.isAuthenticated && !auth.loading ? (
        <Navigate to="/login" replace />
      ) : (
        <Component {...props} />
      )
    }
  />
);

PrivateRoute.prototype = {
  auth: PropTypes.object.isRequired
};

const mapStatetoProps = state => ({
  auth: state.auth
});

export default connect(mapStatetoProps)(PrivateRoute);
