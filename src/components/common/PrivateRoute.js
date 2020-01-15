import React from "react";
import { Redirect, Route } from "react-router-dom";
import { connect } from "react-redux";

function PrivateRoute({ component: Component, authenticatedUser, ...rest }) {
  return (
    <>
      <Route
        {...rest}
        render={props =>
          authenticatedUser ? (
            <Component {...props} />
          ) : (
            <Redirect to="/login" />
          )
        }
      />
    </>
  );
}

const mapStateToProps = state => ({
  authenticatedUser: state.users.authenticatedUser
});

export default connect(mapStateToProps)(PrivateRoute);
