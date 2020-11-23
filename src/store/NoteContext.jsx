import React, { createContext,  useReducer } from "react";
import reducerFunction from "../reducerFunction"

let noteArr = {
  notes:[
  {
    id: "1",
    title: "Example note",
    subject:
      "",
    image: "https://picsum.photos/seed/picsum/300/200",
  },
]
};

//create our context
export const NoteContext = createContext(noteArr); // initialize a context 
 const NoteContextProvider = ({children}) => {
  const [state, dispatch] = useReducer(reducerFunction, noteArr);

  
    function deleteNote (id) {
      dispatch({
        type: "DELETE_NOTE",
        payload: id
      });
    }
  
    function addNote(notes) {
      dispatch({
        type: "ADD_NOTE",
        payload: notes
      });
    }
  
    function editNote(notes) {
      dispatch({
        type: "EDIT_NOTE",
        payload: notes
      });
    }
  
    

// Context provider

  
  return (
    <NoteContext.Provider value={{ notes: state.notes, deleteNote, addNote, editNote }}>
      {children}
    </NoteContext.Provider>
  );
};
export default NoteContextProvider;