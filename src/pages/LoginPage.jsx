import React from "react";

import  StyledFirebaseAuth  from "react-firebaseui/StyledFirebaseAuth";

import firebase, { uiConfig } from "../config/firebaseConfig.js";

const LoginPage = () => {
  return (
    <>
      <h2>Login Page🤓</h2>
      <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
    </>
  );
};
export default LoginPage;