import React, { Component } from "react";
import shortid from "shortid";
// import PropTypes from "prop-types";

import css from "./ContactForm.module.css";
import ContactFormName from "./ContactFormName";
import ContactFormNumber from "./ContactFormNumber";

class ContactForm extends Component {
  state = {
    name: "",
    number: "",
  };

  nameInputId = shortid.generate();

  numberInputId = shortid.generate();
  handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    this.setState({ [name]: value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.handleSubmit(this.state);
    this.props.onSubmit(this.state);
    this.setState({ name: "", number: "" });
  };
  render() {
    return (
      <form className={css.ContactFormWrapper} onSubmit={this.handleSubmit}>
        <ContactFormName
          nameInputId={this.nameInputId}
          title="name"
          value={this.state.name}
          onChange={this.handleChange}
        />
        <ContactFormNumber
          title="number"
          value={this.state.number}
          onChange={this.handleChange}
        />
        <button type="submit">Send</button>
      </form>
    );
  }
}

ContactForm.propTypes = {
  // bla: PropTypes.string,
};

ContactForm.defaultProps = {
  // bla: 'test',
};

export default ContactForm;
