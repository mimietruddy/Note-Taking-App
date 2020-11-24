import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAT7_aBmf_bXdDUNktDgKpE6gPFzJJMp2I",
  authDomain: "note-taking-app-64221.firebaseapp.com",
  databaseURL: "https://note-taking-app-64221.firebaseio.com",
  projectId: "note-taking-app-64221",
  storageBucket: "note-taking-app-64221.appspot.com",
  messagingSenderId: "269515923167",
  appId: "1:269515923167:web:eda4bd96cc34a52b3d936a"
};

firebase.initializeApp(firebaseConfig);

// firebase ui ...
export const uiConfig = {

  signInFlow: "popup",

  signInSuccessUrl: "/",

  signInOptions: [
    firebase.auth.GithubAuthProvider.PROVIDER_ID,
    firebase.auth.EmailAuthProvider.PROVIDER_ID,
  ]
  // currently remove some items here...console errors..............
};

export default firebase;