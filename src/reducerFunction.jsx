

export default (state, action) => {
  switch (action.type) {
    case "DELETE_NOTE":
      return {
        ...state,
        notes: state.notes.filter(
          note => note.id !== action.payload
        )
      };
    case "ADD_NOTE":
      return {
        ...state,
        notes: [...state.notes, action.payload]
      };
    case "EDIT_NOTE":
      const updatedNote = action.payload;

      const updatedNotes = state.notes.map(note => {
        if (note.id === updatedNote.id) {
          return updatedNote;
        }
        return note;
      });

      return {
        ...state,
        notes: updatedNotes
      };
    default:
      return state;
  }
};
