import React from "react";
import TextField from "@mui/material/TextField";

const ContactFormName = ({ title, onChange, value, nameInputId }) => {
  return (
    <>
      <label htmlFor={nameInputId}>
        <TextField
          id="outlined-basic"
          label={title}
          variant="outlined"
          value={value}
          placeholder={title}
          onChange={onChange}
          type="tel"
          name={title}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
        />
      </label>
    </>
  );
};

export default ContactFormName;
