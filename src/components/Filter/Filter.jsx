import React, { Component } from "react";
// import PropTypes from "prop-types";
//import { Test } from './Filter.styles';

const Filter = ({ value, handleFilterChange }) => {
  return (
    <div className="FilterWrapper">
      <form action="">
        <label htmlFor="">
          <p> Find contacts by name</p>
          <input
            placeholder="Find contacts"
            onChange={handleFilterChange}
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
