import React, {useContext} from "react";
import { Link } from "react-router-dom";
import { NoteContext } from "../store/NoteContext";

const Notes =  () => {
  const { notes, deleteNote, editNote } = useContext(NoteContext);
  return (
    
    <>
      {notes.length > 0 ? (
        <>
          {notes.map(note => (
            <div
              className="flex items-center bg-gray-100 mb-10 shadow"
              key={note.id}
            >
              <div className="flex-auto text-left px-4 py-2 m-2">
                <p className="text-gray-900 leading-none">{note.title}</p>
                <p className="text-gray-600">{note.subject}</p>
                <span className="inline-block text-sm font-semibold mt-1">
                  {note.imgurl}
                </span>
              </div>
              <div className="flex-auto text-right px-4 py-2 m-2">
                <Link to={`/edit/${note.id}`}>
                  <button
                    onClick={() => editNote(note.id)}
                    className="btn btn-danger"
                  >
                   </button> 
                </Link>
                <button
                  onClick={() => deleteNote(note.id)}
                  className="btn btn-warning"
                >
                </button>
              </div>
            </div>
          ))}
        </>
      ) : (
        <p className="text-center bg-gray-100 text-gray-500 py-5">No data</p>
      )}
    </>
    
  );
};
  

export default Notes;