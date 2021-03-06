import React from "react";
import "./SearchBox.css";

const SearchBox = props => {
  return (
    <div className="form-group">
      <i className="fas fa-4x fa-book-open"></i>
      <br></br>
      <label>Search for a Book!</label>
      <input
        className="form-control"
        value={props.search}
        type="text"
        name="bookSearch"
        placeholder="Book Title"
        onChange={props.handleInputChange}
      ></input>
      <button
        type="submit"
        className="btn submit"
        onClick={props.handleFormSubmit}
      >
        Submit
      </button>
      <a href="/saved">        
       <button
        type="button"
        className="btn submit"
        
      >
        Saved
        </button>
      </a>
    </div>
  );
};

export default SearchBox;
