import React from 'react';

function SearchBox () {
    return (
        <input
        value={props.filter}
        onChange={props.onChange}
        name="term"
        list="term"
        type="text"
        className="form-control"
        placeholder="search"
        id="term"
      />
    );
}

export default SearchBox;