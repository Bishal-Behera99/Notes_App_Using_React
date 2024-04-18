import React from "react";

import Note from "./Note.js";
import Addnotes from "./Addnotes.js";
function Note_List({ note, addnote, delnote }) {
  return (
    <div className="Note-list">
      {note.map((notes) => (
        <Note
          id={notes.id}
          text={notes.text}
          date={notes.date}
          delnote={delnote}
        />
      ))}

      <Addnotes addnotes={addnote} />
    </div>
  );
}

export default Note_List;
