import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navigation from "./components/Navigation";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";

import Footer from "./components/Footer";
import NoteContextProvider from "./store/NoteContext";
import AuthContextProvider from "./store/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute"
import AddNote from "./pages/AddNote";
import EditNote from "./pages/EditNote";
// import AddNoteForm from "./components/AddNoteForm";
// import EditNoteForm from "./components/EditNoteForm";


const App = () => {
  return (
    <>
      <AuthContextProvider>
        <NoteContextProvider>
          <Router>
            <Navigation />
            <main>
              <Switch>
                {/* If you protect this, ur login redirect to home page won't work by default though
                So you may decide with other path you redirect in the fireconfig file other than 
                homePage....
                or work on some code ! :) */}
                {/* <ProtectedRoute path="/" exact component={HomePage} /> */}
                <Route path="/" exact component={HomePage} />
                <ProtectedRoute path="/addnote" component={AddNote} />
                <ProtectedRoute path="/edit/:id" component={EditNote} />
                <Route path="/login" component={LoginPage} />
              </Switch>
            </main>
            <Footer />
          </Router>
        </NoteContextProvider>
      </AuthContextProvider>
    </>
  );
};
export default App;