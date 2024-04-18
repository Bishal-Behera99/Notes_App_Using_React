import React, { useState } from "react";

function Addnotes({ addnotes }) {
  const [addnote, setnote] = useState("");

  const charactercount = 200;
  function updatenote(event) {
    if (charactercount - event.target.value.length >= 0) {
      const res = event.target.value;
      setnote(res);
    }
  }

  function clickhandler() {
    if (addnote.trim().length > 0) {
      addnotes(addnote);
      setnote("");
    }
  }

  return (
    <div className="Note-body new">
      <textarea
        cols="10"
        rows="8"
        placeholder="Add your notes here..."
        onChange={updatenote}
        value={addnote}
      ></textarea>

      <div className="note-foot">
        <small>{charactercount - addnote.length} Remaining</small>
        <button onClick={clickhandler} className="save">
          Save
        </button>
      </div>
    </div>
  );
}

export default Addnotes;
