import React from "react";
import { useStore } from "../store";

function Search() {
  const { setQuery } = useStore();
  const filterData = (e) => {
    setQuery(e.target.value);
  };

  return (
    <input
      className="w-full border-4 border-gray-200 p-2 rounded-xl"
      placeholder="Search item"
      onChange={filterData}
    />
  );
}

export default Search;
