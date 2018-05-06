import React from "react";
import "./SearchForm.css";

// Using the datalist element we can create autofill suggestions based on the props.breeds array
const SearchForm = props => (
  <form className="search">
    <div className="form-group">
      <label htmlFor="breed">Stock Symbol:</label>
      <input
        value={props.search}
        onChange={props.handleInputChange}
        name="breed"
        list="breeds"
        type="text"
        className="form-control"
        placeholder="Type in a Stock Symbol (ex.QQQ) to begin"
        id="breed"
      />
      <button type="submit" onClick={props.handleFormSubmit} className="btn btn-success">
        Search
      </button>
    </div>
  </form>
);

export default SearchForm;
