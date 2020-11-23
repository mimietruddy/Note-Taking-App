import React from "react";
import EditNoteForm from "../components/EditNoteForm";


const EditNote = ({notes, setNotes}, ) => {
  return (
    <>
      <h1 className="centered">Edit Note🐊🐊🐊 </h1>
      <EditNoteForm notes={notes} setNotes={setNotes}/>
      
    </>
 );
};

export default EditNote;