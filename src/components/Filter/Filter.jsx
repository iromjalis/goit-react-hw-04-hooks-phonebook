import React, { Component } from "react";
// import PropTypes from "prop-types";
import TextField from "@mui/material/TextField";

const Filter = ({ value, onFilterChange }) => {
  return (
    <div className="FilterWrapper">
      <form action="">
        <label htmlFor="">
          <p> Find contacts by name</p>
          <TextField
            id="outlined-basic"
            label="Filter"
            variant="outlined"
            placeholder="Find contacts"
            onChange={onFilterChange}
            type="text"
            name="name"
            value={value}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
          />
        </label>
      </form>
    </div>
  );
};

Filter.propTypes = {
  // bla: PropTypes.string,
};

Filter.defaultProps = {
  // bla: 'test',
};

export default Filter;
