import React from "react";
import { MdDeleteForever } from "react-icons/md";
import "./Notesapp.css";
function Note({ id, text, date, delnote }) {
  return (
    <div className="Note-body">
      <span>{text}</span>
      <div className="note-foot">
        <small>{date}</small>
        <MdDeleteForever
          onClick={() => delnote(id)}
          size="1.3em"
          className="Delbtn"
          style={{ cursor: "pointer" }}
        />
      </div>
    </div>
  );
}

export default Note;
