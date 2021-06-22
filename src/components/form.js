import React from "react";


// Using the datalist element we can create autofill suggestions based on the props.books array
function SearchForm(props) {
  return (
    <form className="search">
      <div className="form-group">
        
        <input
          onChange={props.handleInputChange}
          value={props.search}
          name="search"
          type="text"
          className="form-control"
          placeholder="Search a Book"
          id="search"
        />
       
        <button type="submit" onClick={props.handleFormSubmit} className="btn btn-success">
          Search
        </button>
      </div>
    </form>
  );
}

export default SearchForm;