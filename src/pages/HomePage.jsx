import React, {useContext} from "react";
import Notes from "../components/Notes";
import { NoteContext } from "../store/NoteContext"


const HomePage = () => {

  const {notes} =useContext(NoteContext)


  return (
    <>
      <div className="container-fluid jumbotron">
        <h1 className="centered"> Check out your Notes </h1>
      </div>

      <section className="row  note-section container">
        {notes.map((item, index) => {
          return <Notes key={index} title={item.title} subject={item.subject} image={item.image} />;
        })}
      </section>
    </>
  );
};
export default HomePage;