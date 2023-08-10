import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

function SearchBox() {
  const [searchText, setSearchText] = useState("");
  return (
    <div className="searchField">
      <input
        type="text"
        value={searchText}
        placeholder="what are you looking for?"
        name="search"
        id="search"
        onChange={(event) => {
          setSearchText(event.target.value);
        }}
      />

      <FontAwesomeIcon icon={faMagnifyingGlass} className="searchIcon" />
    </div>
  );
}

export default SearchBox;
