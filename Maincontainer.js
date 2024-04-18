import React, { useState } from "react";

import Note_List from "./Note_List.js";

import { nanoid } from "nanoid";
import Searchnote from "./Searchnote.js";
import "./Notesapp.css";
function Maincontainer() {
  const [notes, setnotes] = useState([
    {
      id: nanoid(),
      text: "This is my first text",
      date: "12/09/2023",
    },

    {
      id: nanoid(),
      text: "This is my first text",
      date: "17/09/2023",
    },
    {
      id: nanoid(),
      text: "This is my first text",
      date: "22/09/2023",
    },
    {
      id: nanoid(),
      text: "This is my first text",
      date: "02/09/2023",
    },
  ]);

  function addnote(text) {
    const date = new Date();

    const newnote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString(),
    };
    const newarr = [...notes, newnote];
    setnotes(newarr);
  }

  function deletenote(id) {
    const newnote = notes.filter((note) => note.id !== id);
    setnotes(newnote);
  }

  const [searchvalue, setsearchvalue] = useState("");
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>NOTES APP</h1>
      <Searchnote search={setsearchvalue} />
      <Note_List
        note={notes.filter((note) =>
          note.text.toLowerCase().includes(searchvalue)
        )}
        addnote={addnote}
        delnote={deletenote}
      />
    </div>
  );
}

export default Maincontainer;
