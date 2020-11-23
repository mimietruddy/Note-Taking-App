import React from "react";
import AddNoteForm from "../components/AddNoteForm";


const AddNote = ({notes, setNotes}, ) => {
  return (
    <>
      <h1 className="centered">Create a new Note🐊🐊🐊 </h1>
      <AddNoteForm notes={notes} setNotes={setNotes}/>
      
    </>
  );
};

export default AddNote;