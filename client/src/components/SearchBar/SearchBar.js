  
import React from "react";

function SearchBar(props) {
  return (
    <form>
      <div className="form-group">
        <label htmlFor="search">Search:</label>
        <input
          onChange={props.handleInputChange}
          value={props.value}
          name="search"
          type="text"
          className="form-control"
          placeholder="Search by URL"
          id="search"
        />
        <br />
        <button onClick={props.handleFormSubmit} className="btn btn-primary">
          Search
        </button>

        <button onClick={props.clearSearch} className="btn btn-primary">
          Clear
        </button>
        
        <button onClick={props.saveSearch} className="btn btn-primary">
          Save
        </button>
        
      </div>
    </form>
  );
}

export default SearchBar;