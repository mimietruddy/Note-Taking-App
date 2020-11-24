import React from "react";
import Notes from "../components/Notes";

const HomePage = () => {
  return (
    <>
      <div className="container-fluid jumbotron">
        <h1 className="centered"> Check out your Notes </h1>
      </div>
      <section className="row  note-section container">
        <Notes/>
      </section>
    </>
  );
};
export default HomePage;
