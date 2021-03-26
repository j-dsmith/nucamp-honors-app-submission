import React, { useState } from "react";
import { connect } from "react-redux";
import { Redirect, Route, useParams } from "react-router";

const AuthRoute = (props) => {
  const { isAuthUser, type } = props;
  console.log(isAuthUser);
  const { id, projectId } = useParams();
  console.log(id, projectId);
  if (type === "guest" && isAuthUser) return <Redirect to="/home" />;
  else if (type === "private" && !isAuthUser) return <Redirect to="/signup" />;

  return <Route {...props} />;
};

const mapStateToProps = (state) => ({
  isAuthUser: state.user.isAuthUser,
});

export default connect(mapStateToProps)(AuthRoute);
