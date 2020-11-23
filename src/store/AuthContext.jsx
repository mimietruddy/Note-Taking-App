import React, { createContext, useEffect, useState } from "react";
import firebase from "../config/firebaseConfig";

export const AuthContext = createContext(); // initialize a context

const AuthContextProvider = (props) => {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState("");

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      setLoggedIn(!!user); // true when user is there and false when user is null
      setUser(user); // set user to user form firebase
      console.log("AuthContextProvider -> isLoggedIn", isLoggedIn);
    });
  }, [user]);

  return (
    <AuthContext.Provider
      value={{ firebase: firebase, user: user, isLoggedIn: isLoggedIn }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
