// import React from "react";
import React, { useState, useContext, useEffect } from "react";
import { NoteContext } from "../store/NoteContext";
import { useHistory } from "react-router-dom";
// import EditNoteForm from "../components/EditNoteForm";

// You are passing props...hmm
const EditNote = (route) => {
  let history = useHistory();

  const { notes, editNote } = useContext(NoteContext);

  const [selectedNote, setSelectedNote] = useState({
    id: null,
    title: "",
    subject: "",
    image: "",
  });

  const currentNoteId = route.match.params.id;

  useEffect(() => {
    const noteId = currentNoteId;
    const selectedNote = notes.find((nts) => nts.id === parseInt(noteId));
    setSelectedNote(selectedNote);
  }, [currentNoteId, notes]);

  const submitNote = (e) => {
    e.preventDefault();
    editNote(selectedNote);
    history.push("/");
  };

  const onClick = (userKey, value) =>
    setSelectedNote({ ...selectedNote, [userKey]: value });

  // I just commented this block
  // if (!selectedUser || !selectedUser.id) {
  //   alert("Id doesn't match !");
  // }

  return (
    <>
      <div className="form-container container">
          <h1 className="centered">Edit Note🐊🐊🐊 </h1>
          <form onSubmit={submitNote}>
            <label htmlFor="fname">Title</label>
            <input
              type="text"
              id="fname"
              className="form-control rounded-0"
              value={selectedNote.title}
              name="firstname"
              placeholder="Title.."
              onChange={(e) => onClick("Title", e.target.value)}
            />
            <br />
            <label htmlFor="subject">Subject</label>
            <textarea
              id="subject"
              className="form-control rounded-0"
              value={selectedNote.subject}
              name="subject"
              placeholder="Start Writing ...."
              style={{ height: "200px" }}
              onChange={(e) => onClick("subject", e.target.value)}
            ></textarea>

            {/*  Conversion of image or link to data url... idea i guess. */}
            
            {/* <label> */}
              {/* <input
                type="file"
                name="Add Note Image"
                value={selectedNote.image}   // Apply it there
                id="imgurl"
              />
              Add Note image
            </label> */}

            {/* Such errors go away... */}

            <br />
            <button type="submit" value="Submit" className="btn btn-success">
              Submit
            </button>
          </form>
        </div>
    </>
  );
};
export default EditNote;
