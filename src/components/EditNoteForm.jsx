import React, { useState, useContext, useEffect } from "react";
import { NoteContext } from "../store/NoteContext";
import { useHistory, Link } from "react-router-dom";

const EditNoteForm = (route) => {

  let history = useHistory();

  const { notes, editNote } = useContext(NoteContext);

  const [selectedUser, setSeletedUser] = useState({
    id: null,
    title: "",
    subject: "",
    image: ""
  });

  const currentUserId = route.match.params.id;

  useEffect(() => {
    const noteId = currentUserId;
    const selectedUser = notes.find(nts => nts.id === parseInt(noteId));
    setSeletedUser(selectedUser);
  }, []);

  const submitNote = e => {
    e.preventDefault();
    editNote(selectedUser);
    history.push("/");
  };

  const onClick = (userKey, value) =>
    setSeletedUser({ ...selectedUser, [userKey]: value });

  if (!selectedUser || !selectedUser.id) {
    alert("Id doesn't match !");
  }

  return (
    <>
      return (
      <div>
        <div className="form-container container">
        <h1 className="centered">Edit Note🐊🐊🐊 </h1>
          <form onSubmit={submitNote}>
            <label for="fname">Title</label>
            <input
              type="text"
              id="fname"
              className="form-control rounded-0"
              value={selectedUser.title}
              name="firstname"
              placeholder="Title.."
              onChange={(e) => onClick("Title", e.target.value)}
            />
            <br />
            <label for="subject">Subject</label>
            <textarea
              id="subject"
              className="form-control rounded-0"
              value={selectedUser.subject}
              name="subject"
              placeholder="Start Writing ...."
              style={{ height: "200px" }}
              onChange={(e) => onClick("subject", e.target.value)}
            ></textarea>
            <label>

              <input type="file" name="Add Note Image" value={selectedUser.image} id="imgurl" />
            Add Note image
          </label>
            <br />
            <button><input
              type="submit"
              value="Submit"
              className="btn btn-success rounded-0"
            /></button>
          </form>
        </div>
      </div>
    </>
  );

};
export default EditNoteForm;