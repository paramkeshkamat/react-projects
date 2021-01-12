import React, { useContext, useRef, useEffect } from "react";
import { AppContext } from "../context";
import "../styles/SearchForm.css";

const SearchForm = () => {
  const { setSearchTerm } = useContext(AppContext);
  let searchValue = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const searchItems = () => {
    setSearchTerm(searchValue.current.value);
  };

  useEffect(() => {
    searchValue.current.focus();
  }, []);

  return (
    <div className="SearchForm">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Search Your Favorite Cocktail</label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="search here..."
          ref={searchValue}
          onChange={searchItems}
        />
      </form>
    </div>
  );
};

export default SearchForm;
