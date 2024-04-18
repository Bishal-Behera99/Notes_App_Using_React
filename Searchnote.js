import React from "react";
import { MdSearch } from "react-icons/md";

function Searchnote({ search }) {
  return (
    <div className="searchnote">
      <MdSearch size="1.3em" />
      <input
        type="text"
        className="Inputtext"
        placeholder="Search Your notes"
        onChange={(event) => search(event.target.value)}
      />
    </div>
  );
}

export default Searchnote;
