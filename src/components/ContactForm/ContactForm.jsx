import React, { useState } from "react";
import shortid from "shortid";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";

import css from "./ContactForm.module.css";
import ContactFormName from "./ContactFormName";
import ContactFormNumber from "./ContactFormNumber";

const ContactForm = ({ onSubmit }) => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const nameInputId = shortid.generate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (e.target.name === "name") {
      setName(value);
    } else setNumber(value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { name, number };
    onSubmit(data);
    setName("");
    setNumber("");
  };

  return (
    <form className={css.ContactFormWrapper} onSubmit={handleSubmit}>
      <ContactFormName
        nameInputId={nameInputId}
        title="name"
        value={name}
        onChange={handleChange}
      />
      <ContactFormNumber
        title="number"
        value={number}
        onChange={handleChange}
      />

      <ButtonGroup
        variant="contained"
        aria-label="outlined primary button group"
      >
        <Button type="submit">Send</Button>
      </ButtonGroup>
    </form>
  );
};

export default ContactForm;
